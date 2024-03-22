import {test, expect, chromium } from '@playwright/test';
//const {firefox} = require('playwright');

test('Site Makeup1', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://makeup.com.ua/ua/');
    await page.locator('.search-button').first().click();
    await page.getByPlaceholder('Понад 249 000 товарів').click();
    await page.getByPlaceholder('Понад 249 000 товарів').fill('Calvin Klein');
    await page.getByPlaceholder('Понад 249 000 товарів').press('Enter');
    await expect(page.url()).toBe("https://makeup.com.ua/ua/search/?q=calvin+klein")

    await page.close()
    await browser.close()
});


test('Site Makeup. Products filtering by designer', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://makeup.com.ua/ua/');
    await page.getByRole('link', { name: 'Парфумерія', exact: true }).click();
    await page.getByText('C', { exact: true }).click();
    await page.locator('#input-checkbox-2243-23671').click();
    await expect(page.url()).toBe("https://makeup.com.ua/ua/categorys/3/#o[2243][]=23671")

    await page.close()
    await browser.close()

});


test('Leetcode site opening', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://leetcode.com/');
  await page.close()
  await browser.close()

});


test('Leetcode account creating', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://leetcode.com/');
  await page.click('text=Sign in');
  await page.locator('form').click();
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('testuser34');
  await page.getByPlaceholder('Password', { exact: true }).click();
  await page.getByPlaceholder('Password', { exact: true }).fill('testuser34');
  await page.getByPlaceholder('Confirm password').click();
  await page.getByPlaceholder('Confirm password').fill('testuser34');
  await page.getByPlaceholder('E-mail address').click();
  await page.getByPlaceholder('E-mail address').fill('annatest34@gmail.com');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.getByText('Hi LeetCoder, what brought you here?🏆Learn and enhance coding skills💼Prepare');

  await page.close()
  await browser.close()

});



test('Site Hillel. Search QA Automation — JavaScript', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://ithillel.ua/');
  await page.getByRole('button', { name: 'Курси' }).click();
  await page.getByRole('button', { name: 'Тестування' }).click();
  await page.getByRole('link', { name: 'QA Automation — JavaScript' }).click();
  await page.getByRole('heading', { name: 'Онлайн-курс QA Automation —' });
  
  await page.close()
  await browser.close()

});


test('Site Hillel. Subscribe to newsletters', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.pause()
  await page.goto('https://ithillel.ua/');
  await page.getByPlaceholder('Введіть свій email').click();
  await page.getByPlaceholder('Введіть свій email').fill('test12345@gmail.com');
  await page.locator('#form-mailing').getByRole('button').click();

  await page.close()
  await browser.close()
});



test('Playwright', async () => {
  const browser = await chromium.launch();
  let page = await browser.newPage();
  await page.goto("https://playwright.dev/docs/intro");
  await page.pause()
  let search = page.locator('//button[@class="DocSearch DocSearch-Button"]');
  await search.click()
  await page.locator('//input[@class="DocSearch-Input"]').fill("test word test word");
})