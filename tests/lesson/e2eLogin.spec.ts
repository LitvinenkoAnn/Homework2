import { test } from "@playwright/test";
import { LoginPage } from "./page-object/LoginPage";
import { HomePage } from "./page-object/HomePage";

test.describe("e2e Test for promova",()=>{

    test.beforeEach(async ({page,isMobile})=>{
        let loginPage = new LoginPage(page)
        await loginPage.visit("https://promova.com/sign-in")
        await loginPage.login()
    })

    

test("Check StartLearning",async ({page})=>{
    let homePage = new HomePage(page)
    await homePage.startLearning()
})

})

