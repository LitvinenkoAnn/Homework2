// import { chromium } from "@playwright/test";
// import LoginPage from "./LoginPage.js";

// class BrowserFixture {
//   async setup() {
//     this.browser = await chromium.launch({ headless: false });
//     this.page = await this.browser.newPage();
//   }

//   async teardown() {
//     await this.browser.close();
//   }
// }

// export const browserFixture = new BrowserFixture();
// export const createLoginPage = async () => {
//   await browserFixture.setup();
//   return new LoginPage(browserFixture.page);
// };