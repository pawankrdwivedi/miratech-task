import { expect, Locator, Page, BrowserContext } from '@playwright/test';

export class YourInformationPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly FIRST_NAME: Locator;
    readonly LAST_NAME: Locator;
    readonly PIN_CODE: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.FIRST_NAME = page.locator('[data-test="firstName"]');
        this.LAST_NAME = page.locator('[data-test="lastName"]');
        this.PIN_CODE=page.locator('[data-test="postalCode"]');
}
async enterYourInformationDetils(firstName:string, lastName:string,pinCode:string): Promise<void> {
  //  this.FIRST_NAME.click();
    await this.FIRST_NAME.fill(firstName);
    //this.LAST_NAME.click();
    await this.LAST_NAME.fill(lastName);
    //this.PIN_CODE.click();
    await this.PIN_CODE.fill(pinCode);
}
}