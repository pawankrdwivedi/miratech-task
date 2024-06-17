import test from '@lib/BaseTest';
import { testConfig } from '@data/testConfig';
import { appConstants } from '@data/appConstants';

const PRODCUT_NAME="Sauce Labs Backpack";
const PRODCUT_NAME_1="Sauce Labs Bike Light";
test('e2e-Add Product to Cart from home page, product details page and checkout', { tag: '@Smoke'}, async ({ loginPage, commonPage, homePage, yourCartPage, yourInformationPage,checkoutPage }) => {
    await test.step('1. Navigate to Application.', async () => {
        await loginPage.navigateToURL();
    });
    await test.step('2. Login to Application.', async () => {
        await loginPage.loginToApplication();
        await commonPage.verifyPageTitle(appConstants.homePageTitle);
    });
    await test.step('Add a product to cart and click on shopping link.', async () => {
        await homePage.addBackPackToCart();
    });

    await test.step('4. Open product details, add to cart and continue', async () => {
        await homePage.openBikeLightPage();
        await commonPage.verifyProductName (PRODCUT_NAME_1);
        await commonPage.clickAddToCartButton();
        await homePage.clickonShoppingCartLink();
        await commonPage.verifyPageTitle(appConstants.cartPageTitle);
    });

    await test.step('5. Click on Checkout link.', async () => {
        await yourCartPage.clickOnCheckoutBUTTON();
        await commonPage.verifyPageTitle(appConstants.checkoutPageTitle);
    });

    await test.step('6. Enter shipping order details and click on Continue.', async () => {
        await yourInformationPage.enterYourInformationDetils(testConfig.firstName, testConfig.lastNAme, testConfig.pinCode);
        await commonPage.clickContinueButton();
        await commonPage.verifyPageTitle(appConstants.orderPageTitle);
    });

    await test.step('7. Verify Order Details and Confirm.', async () => {
        await commonPage.verifyProductNames (PRODCUT_NAME, PRODCUT_NAME_1);
        await checkoutPage.clickFinishButton();
        await commonPage.clickHomeButton();
        await commonPage.verifyPageTitle(appConstants.homePageTitle);
    });
}); 