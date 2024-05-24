import {Page} from "@playwright/test";

export class LoginPage {

    readonly page: Page
    constructor(page: Page) {
      this.page = page;
    }
  
    async fillUsername(username) {
      await this.page.getByRole('textbox', { name: "Username" }).fill(username);
    }
  
    async fillPassword(password) {
      await this.page.getByRole('textbox', { name: "Password" }).fill(password);
    }
  
    async clickLoginButton() {
      await this.page.getByRole('button', { name: "Login" }).click();
    }
  }
  