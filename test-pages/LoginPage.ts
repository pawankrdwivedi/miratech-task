import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { testConfig } from '@data/testConfig';


export class LoginPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly LOGIN_PAGE: Locator;
    readonly USERNAME_EDITBOX: Locator;
    readonly PASSWORD_EDITBOX: Locator;
    readonly LOGIN_BUTTON: Locator;
    

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.LOGIN_PAGE = page.getByText('Swag Labs');
        this.USERNAME_EDITBOX = page.locator('[data-test="username"]');
        this.PASSWORD_EDITBOX = page.locator('[data-test="password"]');
        this.LOGIN_BUTTON = page.locator('[data-test="login-button"]');
    }

    async navigateToURL(): Promise<void> {
        await this.page.goto(testConfig.url);
        await expect(this.LOGIN_PAGE).toBeVisible();
    }

    async loginToApplication(): Promise<void> {
        await this.USERNAME_EDITBOX.fill(testConfig.username);
        await this.PASSWORD_EDITBOX.fill(testConfig.password);
        await this.LOGIN_BUTTON.click();
    }
}