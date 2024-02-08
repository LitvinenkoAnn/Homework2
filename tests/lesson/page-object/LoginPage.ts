import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";
export class LoginPage extends BasePage{
    readonly emailField: any;
    readonly passwordField: any;
    readonly sumbitBtn: any
    readonly page: any

    constructor(page){
        super(page)
        this.page = page
        this.emailField = page.locator('//input[@type="email"]') 
        this.passwordField = page.locator('//input[@type="password"]')
        this.sumbitBtn = page.locator('//button[@type="submit"]')
        
    }
    
    async login(email = "testanna2@gmail.com",password = "123456"){
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.sumbitBtn.click()
        await this.page.waitForLoadState('load');
        await expect(this.page).toHaveURL("https://promova.com/my-plan/start-onboarding", { timeout: 20000 });

}
    }