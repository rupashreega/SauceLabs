// import {test} from '@playwright/test'

// test('login',async({page}) =>
// {
//     await page.goto("https://www.saucedemo.com/")
//     // await page.locator('#user-name').fill("standard_user")
//     // await page.locator('#password').fill("secret_sauce")
//     // await page.locator('#login-button').click()

//     await page.getByRole('textbox',{name: "Username"}).fill("standard_user")
//     await page.getByRole('textbox',{name: "Password"}).fill("secret_sauce")
//     await page.getByRole('button',{name: "Login"}).click()

   
//     var shoppinglist = ["MRF Bat","Sauce Labs Backpack","Sauce Labs Bike Light","Sauce Labs Bolt T-Shirt"]
    
//     for(var item of shoppinglist)
//         {
//             var visible = await page.locator('.inventory_item_description').filter({hasText: item}).isVisible()
//             console.log(visible)
//             if(visible)
//             {
//                     await page.locator('.inventory_item_description').filter({hasText: item}).getByRole('button',{name: "Add to cart"}).click()
//             }
//             else
//             {
//                 console.log("Element not found" + item)
//             }

//         }
    
//         await page.locator('.shopping_cart_badge').click()
//         await page.locator('.cart_item_label').filter({hasText: "Sauce Labs Bike Light"}).getByRole('button',{name: 'Remove'}).click()
//         await page.getByRole('button',{name: 'Checkout'}).click()
//         await page.getByPlaceholder('First Name').fill("A")
//         await page.getByPlaceholder('Last Name').fill("B")
//         await page.getByPlaceholder('Zip/Postal Code').fill("C")
//         await page.getByRole('button',{name: 'continue'}).click()
//         await page.locator('a').filter({hasText: "Sauce Labs Bolt T-Shirt"}).click()
//         await page.locator('.inventory_details_desc_container').filter({hasText: "Sauce Labs Bolt T-Shirt"}).getByRole('button',{name: 'Remove'}).click()
//         await page.locator('.shopping_cart_badge').click()
//         await page.getByRole('button',{name: 'Checkout'}).click()
//         await page.getByPlaceholder('First Name').fill("A")
//         await page.getByPlaceholder('Last Name').fill("B")
//         await page.getByPlaceholder('Zip/Postal Code').fill("C")
//         await page.getByRole('button',{name: 'continue'}).click()
//         var total_value = await page.locator('.summary_total_label').textContent()
//         console.log(total_value)
//         if(total_value!==null)
//         {
//             const price: number = parseFloat(total_value.slice(total_value.indexOf('$') + 1)) ;
//                     if(price < 40.00)
//                         {
//                             await page.getByRole('button',{name: 'Finish'}).click()
//                             if(await page.getByText('Thank you for your order!').isVisible())
//                                 {
//                                     await page.getByRole('button',{name: 'Back Home'}).click()
//                                 }
//                             else
//                             {
//                                 throw new Error("Thank you for your order not found")
//                             }
                                
//                         }
//                     else
//                     {
//                         await page.getByRole('button',{name: 'Cancel'}).click()
//                     }
//                     await page.getByRole('button',{name: 'Open Menu'}).click()
//                     await page.locator('a').filter({hasText: "Logout"}).click()
//         }
//         else
//         {
//            throw new Error("total Value not found!");
//         }
// }
// )

// test("checkAllItemdisplayed",() => {
// }
// )

// test('addToCart',() =>
//     {
    
//     }
//     )

// test("goToCart",() => {
// }
// )

// test("removeItemFromCart",() => {
// }
// )

// test("removeItemFromCheckout",() => {
// }
// )

// test("checkoutForm",() => {
// }
// )


// test("checkout",() => {
// }
// )

// test("checkTotalPrice",() => {
// }
// )


// test("finishPage",() => {
// }
// )

// test("BacktoHome",() => {
// }
// )

// test("Logout",() => {
// }
// )

