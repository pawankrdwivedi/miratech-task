import { expect, Locator, Page, BrowserContext } from '@playwright/test';

export class YourCartPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly CONTINUE_SHOPPING: Locator;
    readonly CHECKOUT: Locator

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.CONTINUE_SHOPPING = page.locator('[data-test="continue-shopping"]');
        this.CHECKOUT = page.locator('[data-test="checkout"]');
    }

    async clickOnCheckoutBUTTON(): Promise<void> {
        await this.CHECKOUT.click();
     
    }
}