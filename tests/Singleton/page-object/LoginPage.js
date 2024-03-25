import { expect } from "@playwright/test";

class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.locator('//input[@type="email"]');
    this.password = page.locator('//input[@type="password"]');
    this.message = page.locator('//span[@class="input_error__sghLZ"]');
    this.submitBtn = page.locator('//button[@type="submit"]');
  }

  async doLogin(email, password, result, locator) {
    await this.page.goto("https://promova.com/sign-in");
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submitBtn.click();
    await this.page.waitForSelector(locator);
    expect(this.page.locator(locator)).toHaveText(result);
  }
}

const loginPageInstance = (() => {
  let instance;

  function createInstance(page) {
    return new LoginPage(page);
  }

  return {
    getInstance: (page) => {
      if (!instance) {
        instance = createInstance(page);
      }
      return instance;
    }
  };
})();

export default loginPageInstance;