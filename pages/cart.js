import { test, expect } from '@playwright/test';
import { error } from 'console';
exports.CartPage = class CartPage {

    constructor(page) {
        this.page = page;
        this.errMsg = page.locator('h3');
        this.cards = this.page.locator('.inventory_item_description');
        this.cardTitles = this.cards.locator('.inventory_item_name ');
        this.addToCartBtn = this.cards.locator('.pricebar button');
        this.cartButton = this.page.locator('#shopping_cart_container');
        this.cartItems = this.page.locator('.inventory_item_name');
        this.checkout = this.page.locator("text=Checkout");
        this.allImgs = this.page.locator('img[data-test*="inventory-item"]');
        this.firstImg = this.page.locator('img[data-test*="sauce-labs-backpack-img"]');
        this.secondImg = this.page.locator('img[data-test="item-sauce-labs-backpack-img"]');
    }

    // This function adds items to the cart
    async addItemsToCart(itemNames) {
        const titles = await this.cardTitles.allTextContents();
        const count = await this.cards.count();

        for(let i=0; i<count; i++) {
            const actualTitle = await this.cards.nth(i).locator('.inventory_item_name ').textContent();
            if(itemNames.includes(actualTitle)) {
                await this.cards.nth(i).locator("text= Add To Cart").click();
            }
        }
    }

    // This function clicks on cart button
    async clickOnCart() {
        await this.cartButton.click();
        expect(await this.page.screenshot({fullPage: true})).toMatchSnapshot('CartPage.png');
    }

    // This functions verifies items displayed in cart are as per selected items by user
    async verifyProductsDisplayed(itemNames) {
        await this.cartItems.first().waitFor();
        const count = this.cartItems.count();

        for(let i=0; i<count; i++) {
            const flag = this.page.locator('div.inventory_item_name:hasText("'+itemNames.nth(i)+'")');
            expect(flag).toBeTruthy();
        }
    }

    // This function clicks on checkout button
    async checkoutCart() {
        await this.checkout.click();
    }

    // This function verifies that error message is displayed for locked out user 
    async verifyLockedOutUser(message) {
        this.errMsg.waitFor();
        const error = await this.errMsg.textContent();
        console.log(error);

        if(error.includes(message)) {
            expect(await this.page.screenshot({fullPage: true})).toMatchSnapshot('LockedUser.png');
            console.log("Error message for locked out user verified");
            expect(true).toBeTruthy();
        } else {
            console.log("Error message for locked out user is not verified");
            console.log("Actual Error Message : " + error);
            console.log("Expected Error Message : " + message);
            expect(false).toBeTruthy();
        }
    }

    // This function verifies problem user functionality
    async verifyProblemUser() {
        const count = await this.allImgs.count();
        const allSrc = [];
        for(let i=0; i<count; i++) {
            const src = await this.allImgs.nth(i).getAttribute('src');
            allSrc.push(src);
        }
        const firstSrc = allSrc[0];
        const allSame = allSrc.every(src => src === firstSrc);
        
        if(allSame) {
            console.log("This is a problem user.");
            expect(await this.page.screenshot({fullPage: true})).toMatchSnapshot('ProblemUser.png');
            expect(true).toBeTruthy();
        } else {
            console.log("This is not a problem user.");
            expect(true).toBeFalsy();
        }
    }

    // This function verifies error user functionality
    async verifyErrorUser() {
        await this.page.waitForTimeout(2000);
        await this.addToCartBtn.nth(0).click();
        const removeBtn = await this.addToCartBtn.nth(0).textContent();
        const addToCartBtn = await this.addToCartBtn.nth(0).textContent();

        if(addToCartBtn != "Add to Cart"){
            expect(await this.page.screenshot({fullPage: true})).toMatchSnapshot('ErrorUser.png');
            console.log('This is error user.');
            expect(true).toBeTruthy();
        } else {
            console.log('Unable to verify error user');
            console.log('Unable to click on Remove button');
            expect(false).toBeTruthy();
        }
    }

    // This function verifies visual user functionality
    async verifyVisualUser() {
        const firstSrc = await this.firstImg.getAttribute('src');
        await this.firstImg.click();  
        await this.page.waitForTimeout(1000);     
        const secondSrc = await this.secondImg.getAttribute('src');
        
        if(!(firstSrc == secondSrc)) {
            expect(await this.page.screenshot({fullPage: true})).toMatchSnapshot('VisualUser.png');
            console.log('This is visual user.');
            expect(true).toBeTruthy();
        } else {
            console.log('Unable to verify visual user');
            console.log("Actual image source : " + firstSrc);
            console.log("Expected image source : " + secondSrc);
            expect(false).toBeTruthy();
        }
    }

}