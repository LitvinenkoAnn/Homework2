
// import { test } from "@playwright/test";
// import { browserFixture, createLoginPage } from "./fixtures.js";

// let negativeLoginData = [
//   {
//     email: "emailgmail.com",
//     password: "23124124124",
//     result: "Oops! Please enter a valid email!",
//     locator: '//span[@class="input_error__sghLZ"]',
//   },
//   {
//     email: "emailfg@mail.com",
//     password: "23124124124",
//     result: "There is no account with this email :(",
//     locator: '//span[@class="input_error__sghLZ"]',
//   },
//   {
//     email: "email@gmail.com",
//     password: "incorrectpassword",
//     result: "Sorry, this isn't the right password!",
//     locator: '//span[@class="input_error__sghLZ"]',
//   },
// ];

// negativeLoginData.forEach(({ email, password, result, locator }) => {
//   test("Log in check", async () => {
//     const loginPage = await createLoginPage();
//     await loginPage.open();
//     await loginPage.doLogin(email, password);
//     await loginPage.waitForSelector(locator);
//     await loginPage.assertText(locator, result);
//     await browserFixture.teardown();
//   });
// });