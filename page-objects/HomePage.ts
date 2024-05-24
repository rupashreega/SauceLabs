import {Page} from "@playwright/test";
export class HomePage {
    readonly page: Page
    constructor(page: Page) {
      this.page = page;
    }
  
    async clickMenuButton() {
      await this.page.getByRole('button', { name: 'Open Menu' }).click();
    }
  
    async clickLogoutButton() {
      await this.page.locator('a').filter({ hasText: "Logout" }).click();
    }
  }