import { expect } from "@playwright/test";

export default class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = this.page.locator('//input[@type="email"]');
    this.password = this.page.locator('//input[@type="password"]');
    this.message = this.page.locator('//span[@class="input_error__sghLZ"]');
    this.submitBtn = this.page.locator('//button[@type="submit"]');
  }

  async open() {
    await this.page.goto("https://promova.com/sign-in");
  }

  async doLogin(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submitBtn.click();
  }

  async waitForSelector(locator) {
    await this.page.waitForSelector(locator);
  }

  async assertText(locator, result) {
    await expect(this.page.locator(locator)).toHaveText(result);
  }
}