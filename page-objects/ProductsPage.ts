import {Page} from "@playwright/test";
export class ProductsPage {
    readonly page: Page
    constructor(page: Page) {
      this.page = page;
    }

    async itemAvailable(itemName) {
        return await this.page.locator('.inventory_item_description').filter({ hasText: itemName }).isVisible();
    }
  
    async addToCart(itemName) {
      const addToCartButton = await this.page.locator('.inventory_item_description').filter({ hasText: itemName }).getByRole('button', { name: "Add to cart" });
      await addToCartButton.click();
    }
  
    async removeItemFromCart(itemName) {
      const removeFromCartButton = await this.page.locator('.cart_item_label').filter({ hasText: itemName }).getByRole('button', { name: 'Remove' });
      await removeFromCartButton.click();
    }
  
    async clickItem(itemName) {
      await this.page.locator('a').filter({ hasText: itemName }).click();
    }
  
    async removeItemFromDetails(itemName) {
      const removeFromCartButton = await this.page.locator('.inventory_details_desc_container').filter({ hasText: itemName }).getByRole('button', { name: 'Remove' });
      await removeFromCartButton.click();
    }
  }