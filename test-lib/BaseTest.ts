import { TestInfo, test as baseTest } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { HomePage } from '@pages/HomePage';
import { CommonPage } from '@pages/CommonPage';
import { YourCartPage } from '@pages/YourCartPage';
import { YourInformationPage } from '@pages/YourInformationPage';
import { CheckoutPage } from '@pages/CheckoutPage';

const test = baseTest.extend<{
    loginPage: LoginPage;
    homePage: HomePage;
    commonPage: CommonPage;
    yourCartPage: YourCartPage;
    yourInformationPage: YourInformationPage;
    checkoutPage: CheckoutPage;
    testInfo: TestInfo;
}>({
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context));
    },
    commonPage: async ({ page, context }, use) => {
        await use(new CommonPage(page, context));
    },
    homePage: async ({ page, context }, use) => {
        await use(new HomePage(page, context));
    },
    yourCartPage: async ({ page, context }, use) => {
        await use(new YourCartPage(page, context));
    },
    yourInformationPage: async ({ page, context }, use) => {
        await use(new YourInformationPage(page, context));
    },
    checkoutPage: async ({ page, context }, use) => {
        await use(new CheckoutPage(page, context));
    }
})

export default test;