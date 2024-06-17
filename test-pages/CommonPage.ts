import { expect, Locator, Page, BrowserContext } from '@playwright/test';

export class CommonPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly PAGE_TITLE: Locator;
    readonly CONTINUE: Locator;
    readonly BACK_HOME:Locator;
    readonly PRODUCT_NAME:Locator;
    readonly ADD_TO_CART: Locator;
    readonly REMOVE: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.PAGE_TITLE = page.locator('[data-test="title"]');
        this.CONTINUE=page.locator('#continue');   
        this.BACK_HOME=page.locator('[data-test="back-to-products"]');
        this.PRODUCT_NAME=page.locator('[data-test="inventory-item-name"]');
        this.ADD_TO_CART=page.locator("#add-to-cart");
        this.REMOVE=page.locator("#remove");
    }

    async verifyPageTitle(pageTitle: string): Promise<void> {
        await expect(this.PAGE_TITLE).toContainText(pageTitle);     
    }
    
    async clickContinueButton(): Promise<void> {
        await this.CONTINUE.click();     
    }

    async verifyProductName(productName:string){
        await expect(this.PRODUCT_NAME).toContainText(productName); 
    }

    async verifyProductNames(productName:string,productName1:string){
        await expect(this.PRODUCT_NAME.nth(0)).toContainText(productName); 
        await expect(this.PRODUCT_NAME.nth(1)).toContainText(productName1); 
    }

    async clickAddToCartButton(){
        await this.ADD_TO_CART.click();
    }
    
    async clickHomeButton(){
        await this.BACK_HOME.click();
    }
    async clickRemoveButton(){
        await this.REMOVE.click();
    }

}