import test from '@lib/BaseTest';
import { testConfig } from '@data/testConfig';
import { appConstants } from '@data/appConstants';

const PRODCUT_NAME="Sauce Labs Backpack";

test('e2e-Add Product to Cart from home page and checkout', { tag: '@Smoke'}, async ({ loginPage, commonPage, homePage, yourCartPage, yourInformationPage,checkoutPage }) => {
    await test.step('Navigate to Application.', async () => {
        await loginPage.navigateToURL();
    });
    await test.step('Login to Application.', async () => {
        await loginPage.loginToApplication();
        await commonPage.verifyPageTitle(appConstants.homePageTitle);
    });
    await test.step('Add a product to cart and click on shopping link.', async () => {
        await homePage.addBackPackToCart();
        await homePage.clickonShoppingCartLink();
        await commonPage.verifyPageTitle(appConstants.cartPageTitle);
    });
    await test.step('Click on Checkout link.', async () => {
        await yourCartPage.clickOnCheckoutBUTTON();
        await commonPage.verifyPageTitle(appConstants.checkoutPageTitle);
    });

    await test.step('Enter shipping order details and click on Continue.', async () => {
        await yourInformationPage.enterYourInformationDetils(testConfig.firstName, testConfig.lastNAme, testConfig.pinCode);
        await commonPage.clickContinueButton();
        await commonPage.verifyPageTitle(appConstants.orderPageTitle);
    });

    await test.step('Verify Order Details and Confirm.', async () => {
        await commonPage.verifyProductName (PRODCUT_NAME);
        await checkoutPage.clickFinishButton();
        await commonPage.clickHomeButton();
        await commonPage.verifyPageTitle(appConstants.homePageTitle);
    });
}); 