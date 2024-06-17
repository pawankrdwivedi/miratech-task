import { expect, Locator, Page, BrowserContext } from '@playwright/test';
import path from 'path';

export class HomePage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly PRODUCT_DROPDOWN: Locator;
    readonly SHOPPING_CART_LINK: Locator;
    readonly HOME_PAGE_TITLE: Locator;
    readonly BACK_PACK_LINK: Locator;
    readonly BIKE_LIGHT_LINK: Locator;
    readonly T_SHIRT_LINK: Locator;
    readonly FLEECE_JACKET_LINK: Locator;
    readonly ONSIE_LINK: Locator;
    readonly RED_T_SHIRT_LINK: Locator;
    readonly BACK_TO_PRODUCTS_LINK: Locator;
    readonly BACK_PACK_ADD_TO_CART: Locator;
    readonly BIKE_LIGHT_ADD_TO_CART: Locator;
    readonly T_SHIRT_ADD_TO_CART: Locator;
    readonly FLEECE_JACKET_ADD_TO_CART: Locator;
    readonly ONSIE_ADD_TO_CART: Locator;
    readonly RED_T_SHIRT_ADD_TO_CART: Locator;    
    readonly BACK_PACK_REMOVE_CART: Locator;
    readonly BIKE_LIGHT_REMOVE_CART: Locator;
    readonly T_SHIRT_REMOVE_CART: Locator;
    readonly FLEECE_JACKET_REMOVE_CART: Locator;
    readonly ONSIE_REMOVE_CART: Locator;
    readonly RED_T_SHIRT_REMOVE_CART: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.HOME_PAGE_TITLE = page.locator('[data-test="title"]');
        this.SHOPPING_CART_LINK = page.locator('[data-test="shopping-cart-link"]');
        this.PRODUCT_DROPDOWN = page.locator('[data-test="product-sort-container"]');
        this.BACK_PACK_LINK = page.locator('[data-test="item-4-title-link"]');
        this.BIKE_LIGHT_LINK = page.locator('[data-test="item-0-title-link"]');
        this.T_SHIRT_LINK = page.locator('[data-test="item-1-title-link"]');
        this.FLEECE_JACKET_LINK = page.locator('[data-test="item-5-title-link"]');
        this.ONSIE_LINK = page.locator('[data-test="item-2-title-link"]');
        this.RED_T_SHIRT_LINK = page.locator('[data-test="item-3-title-link"]');
        this.BACK_TO_PRODUCTS_LINK = page.locator('[data-test="back-to-products"]');
        this.BACK_PACK_ADD_TO_CART =  page.locator('#add-to-cart-sauce-labs-backpack');
        this.BIKE_LIGHT_ADD_TO_CART =  page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.T_SHIRT_ADD_TO_CART=  page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.FLEECE_JACKET_ADD_TO_CART =  page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
        this.ONSIE_ADD_TO_CART =  page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
        this.RED_T_SHIRT_ADD_TO_CART=  page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]');
        this.BACK_PACK_REMOVE_CART = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.BIKE_LIGHT_REMOVE_CART = page.locator('[data-test="remove-sauce-labs-bike-light"]');
        this.T_SHIRT_REMOVE_CART = page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
        this.FLEECE_JACKET_REMOVE_CART = page.locator('[data-test="remove-sauce-labs-fleece-jacket"]');
        this.ONSIE_REMOVE_CART = page.locator('[data-test="remove-sauce-labs-onesie"]');
        this.RED_T_SHIRT_REMOVE_CART = page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]');
      };

      async addBackPackToCart(): Promise<void>{
        await expect(this.BACK_PACK_ADD_TO_CART).toBeVisible();
        await this.BACK_PACK_ADD_TO_CART.click();       
      }

      async removeBackPackFromCart(): Promise<void>{
        await expect(this.BACK_PACK_REMOVE_CART).toBeVisible();
        await this.BACK_PACK_REMOVE_CART.click();       
      }

      async openBackPackDetailsPage(): Promise<void>{
        await this.BACK_PACK_LINK.click();       
      }

      async addBikeLightToCart(): Promise<void>{
        await expect(this.BIKE_LIGHT_ADD_TO_CART).toBeVisible();
        await this.BIKE_LIGHT_ADD_TO_CART.click();       
      }

      async removeBikeLightFromCart(): Promise<void>{
        await expect(this.BIKE_LIGHT_REMOVE_CART).toBeVisible();
        await this.BIKE_LIGHT_REMOVE_CART.click();       
      }

      async openBikeLightPage(): Promise<void>{
        await this.BIKE_LIGHT_LINK.click();       
      }






      async clickonShoppingCartLink(): Promise<void>{
        await expect(this.SHOPPING_CART_LINK).toBeVisible();
        await this.SHOPPING_CART_LINK.click();
      }
}