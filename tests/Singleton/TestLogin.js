import { test } from "@playwright/test";
import LoginPageInstance from "./Singleton/page-object/LoginPage2.js";
import { chromium } from "playwright";

const negativeLoginData = [
  {
    email: "emailgmail.com",
    password: "23124124124",
    result: "Oops! Please enter a valid email!",
    locator: '//span[@class="input_error__sghLZ"]',
  },
  {
    email: "emailfg@mail.com",
    password: "23124124124",
    result: "There is no account with this email :(",
    locator: '//span[@class="input_error__sghLZ"]',
  },
  {
    email: "email@gmail.com",
    password: "incorrectpassword",
    result: "Sorry, this isn't the right password!",
    locator: '//span[@class="input_error__sghLZ"]',
  },
];

negativeLoginData.forEach(async ({ email, password, result, locator }) => {
  test("Log in check", async ({ page }) => {
    const browser = await chromium.launch({ headless: false });
    const newPage = await browser.newPage(); 
    const loginPage = LoginPageInstance.getInstance(newPage);
    await loginPage.doLogin(email, password, result, locator);
    await newPage.close();
    await browser.close();
  });
});