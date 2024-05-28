// import {test} from '@playwright/test'
import {LoginPage} from '../page-objects/LoginPage'
import {ProductsPage} from '../page-objects/ProductsPage'
import {CheckoutPage} from '../page-objects/CheckoutPage'
import {HomePage} from '../page-objects/HomePage'
const { test, expect } = require('@playwright/test');
const allure = require('allure-commandline');

test('login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const checkoutPage = new CheckoutPage(page);
    const homePage = new HomePage(page);
  
    await page.goto("https://www.saucedemo.com/");
  
    await loginPage.fillUsername("standard_user");
    await loginPage.fillPassword("secret_sauce");
    await loginPage.clickLoginButton();
  
    const shoppingList = ["MRF Bat", "Sauce Labs Backpack", "Sauce Labs Bike Light", "Sauce Labs Bolt T-Shirt"];
  
    for (const item of shoppingList) {
      const isVisible = await productsPage.itemAvailable(item);
      try{
        if (!isVisible) {
            throw new Error(`Element not found: ${item}`);
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
    await productsPage.removeItemFromCart("Sauce Labs Bike Light");
  
    await checkoutPage.clickCheckOutButton();
    await checkoutPage.fillFirstName("A");
    await checkoutPage.fillLastName("B");
    await checkoutPage.fillPostalCode("C");
    await checkoutPage.clickContinueButton();
  
    await productsPage.clickItem("Sauce Labs Bolt T-Shirt"); // Assuming you want to modify this item
    await productsPage.removeItemFromDetails("Sauce Labs Bolt T-Shirt");
    await page.locator('.shopping_cart_badge').click();
    await checkoutPage.clickCheckOutButton();
  
    await checkoutPage.fillFirstName("A"); // Refilling for the final checkout
    await checkoutPage.fillLastName("B");
    await checkoutPage.fillPostalCode("C");
    await checkoutPage.clickContinueButton();
  
    const totalValue = await checkoutPage.getTotalValue();
  
    if (totalValue !== null) {
      const price = parseFloat(totalValue.slice(totalValue.indexOf('$') + 1));
      console.log(price)
      try
      {
        if (price < 20.00) {
          await checkoutPage.clickFinishButton();
          if (await checkoutPage.isThankYouMessageVisible()) {
            console.log("Order successful!");
            await checkoutPage.clickBackHomeButton();
            await homePage.clickMenuButton();
            await homePage.clickLogoutButton();
          } else {
            throw new Error("Thank you for your order message not found!");
          }
        } else {
          // await checkoutPage.clickCancelButton();
          throw new Error("Value less than $20.")
        }
      }
      catch(error)
      {
        console.error(error.message);
      }
      
    } 
    
    else {
      throw new Error("Total Value not found!");
    }
  });


  // Allure notes:

  //npx playwright test --reporter=line,allure-playwright
/*allure generate ./allure-result --clean
allure open ./allure-report*/