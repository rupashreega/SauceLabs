import {Page} from "@playwright/test";
export class CheckoutPage {
    readonly page: Page
    constructor(page: Page) {
      this.page = page;
    }
  
    async fillFirstName(firstName) {
      await this.page.getByPlaceholder('First Name').fill(firstName);
    }
  
    async fillLastName(lastName) {
      await this.page.getByPlaceholder('Last Name').fill(lastName);
    }
  
    async fillPostalCode(postalCode) {
      await this.page.getByPlaceholder('Zip/Postal Code').fill(postalCode);
    }
  
    async clickContinueButton() {
      await this.page.getByRole('button', { name: 'continue' }).click();
    }
  
    async clickCheckOutButton() {
      await this.page.getByRole('button', { name: 'Checkout' }).click();
    }

    async clickBackHomeButton() {
      await this.page.getByRole('button', { name: 'Back Home' }).click();
    }

    async getTotalValue() {
      const totalValue = await this.page.locator('.summary_total_label').textContent();
      return totalValue;
    }
  
    async clickFinishButton() {
      await this.page.getByRole('button', { name: 'Finish' }).click();
    }
  
    async isThankYouMessageVisible() {
      return await this.page.getByText('Thank you for your order!').isVisible();
    }
  
    async clickCancelButton() {
      await this.page.getByRole('button', { name: 'Cancel' }).click();
    }
  }