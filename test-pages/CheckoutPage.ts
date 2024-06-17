import { expect, Locator, Page, BrowserContext } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly PRODUCT_NAME: Locator;
    readonly FINISH_BUTTON: Locator;
    readonly CONFIRMATION_HEADER: Locator;
    readonly CONFIRMATION_TEXT: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.FINISH_BUTTON = page.locator('[data-test="finish"]');
        this.CONFIRMATION_HEADER = page.locator('[data-test="complete-header"]');
        this.CONFIRMATION_TEXT = page.locator('[data-test="complete-text"]');
        
    }

   

    async clickFinishButton(): Promise<void> {
        await this.FINISH_BUTTON.click();
        await expect(this.CONFIRMATION_HEADER).toContainText("Thank you for your order");
        await expect(this.CONFIRMATION_TEXT).toContainText("Your order has been dispatched, and will arrive just as fast as the pony can get there"); 

     
    }
}