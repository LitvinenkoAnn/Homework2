import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../page-object/LoginPage";
import { HomePage } from "../page-object/HomePage";

type basePage = {
  loginPage: LoginPage,
  homePage: HomePage,
}

export const test = baseTest.extend<basePage>({
    homePage: async ({page}, use) => {
        console.log("Before homePage was created")
        let homePage = new HomePage(page)
        await use(homePage);
        console.log("After loginPage was created")
    },
      loginPage: async ({page}, use) => {
        console.log("Before loginPage was created")
        let loginPage = new LoginPage(page)
        await use(loginPage);
        console.log("After loginPage was created")
      },
})