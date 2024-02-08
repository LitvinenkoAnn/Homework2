import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{
    lessonsBtn: any;
    startLearning: any;
    lessonsHeader: any;

    constructor(page:Page){
        super(page)
        this.lessonsBtn = page.locator('//a[@data-event="gen_clicked_lessons"]')
        this.startLearning = async () => {
            await page.locator('//a[@class="button_btn_filled__SLs_U cta_section_button__eFWR4"]').click();
        };
        this.lessonsHeader = page.locator('//h1[@class="credits_plans_section_section_title__CWlLc"]')
   }

   async checkFirstLesson() {
    await this.lessonsBtn.click();
    await this.startLearning(); 
    await this.page.waitForLoadState('load');
    await expect(this.lessonsHeader).toContainText("Choose your plan");
}
}