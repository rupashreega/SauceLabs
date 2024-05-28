import {test, expect} from '@playwright/test';
import {LoginPage} from '../page-objects/LoginPage'
import {ProductsPage} from '../page-objects/ProductsPage'
import {CheckoutPage} from '../page-objects/CheckoutPage'
import {HomePage} from '../page-objects/HomePage'
import * as csv from '@fast-csv/parse';
const fs = require('fs'); // For file system access
const { parse } = require('fast-csv');

interface TestData {
  username: string;
  password: string;
  shoppingList: string;
  firstname: string;
  lastname: string;
  postalcode: string;
  removeitemfromcart: string;
  removeitemfromcheckout: string;
}

async function loadTestData(filePath) {

  const data: TestData[] = [];
  const stream = fs.createReadStream(filePath);
  const csvData = parse(stream);

  for await (const row of csvData) {
      const typedRow = row as TestData;
      data.push(typedRow);
  }

  return data;

}


test('login', async ({page}) => 
{
  const testDataPromise  = loadTestData('test_data.csv');
  testDataPromise.then(async (testData) => 
  {
    for (const testCase of testData) {
      const username = testCase.username;
      console.log(username)
      const password = testCase.password;
      console.log(password)
      const shoppingList = testCase.shoppingList.split(',');
      const firstname = testCase.firstname;
      const lastname = testCase.lastname;
      const postalcode = testCase.postalcode;
      const removeitemfromcart = testCase.removeitemfromcart;
      const removeitemfromcheckout = testCase.removeitemfromcheckout;

        
      const loginPage = new LoginPage(page);
      const productsPage = new ProductsPage(page);
      const checkoutPage = new CheckoutPage(page);
      const homePage = new HomePage(page);
      

      await page.goto("https://www.saucedemo.com/");
      await loginPage.fillUsername(username);
      await loginPage.fillPassword(password);
      await loginPage.clickLoginButton();
    
      // const shoppingList = ["MRF Bat", "Sauce Labs Backpack", "Sauce Labs Bike Light", "Sauce Labs Bolt T-Shirt"];
    
      for (const item of shoppingList) {
        const isVisible = await productsPage.itemAvailable(item);
        try{
          if (!isVisible) {
            throw new Error('Element not found:');
              // throw new Error(item);
            }
            else
            {
              await productsPage.addToCart(item);
            }
        }
        catch(error)
        {
          console.error(error.message);
        }
        
      }

      await page.locator('.shopping_cart_badge').click();
      await productsPage.removeItemFromCart(removeitemfromcart);
      await checkoutPage.clickCheckOutButton();
      await checkoutPage.fillFirstName(firstname);
      await checkoutPage.fillLastName(lastname);
      await checkoutPage.fillPostalCode(postalcode);
      await checkoutPage.clickContinueButton();
      await productsPage.clickItem(removeitemfromcheckout); // Assuming you want to modify this item
      await productsPage.removeItemFromDetails(removeitemfromcheckout);
      await page.locator('.shopping_cart_badge').click();
      await checkoutPage.clickCheckOutButton();
    
      await checkoutPage.fillFirstName(firstname); // Refilling for the final checkout
      await checkoutPage.fillLastName(lastname);
      await checkoutPage.fillPostalCode(postalcode);
      await checkoutPage.clickContinueButton();
    
      const totalValue = await checkoutPage.getTotalValue();
    
      if (totalValue !== null) {
        const price = parseFloat(totalValue.slice(totalValue.indexOf('$') + 1));
        if (price < 40.00) {
          await checkoutPage.clickFinishButton();
          if (await checkoutPage.isThankYouMessageVisible()) {
            console.log("Order successful!");
            await checkoutPage.clickBackHomeButton();
            await homePage.clickMenuButton();
            await homePage.clickLogoutButton();
          } 
          else {
            throw new Error("Thank you for your order message not found!");
          }
        } 
        else {
          await checkoutPage.clickCancelButton();
        }
      } 
      else {
        throw new Error("Total Value not found!");
      }
    }
  })
  .catch((error) => {
    // Handle errors during data loading
    console.error('Error loading test data:', error);
  });
});


