# Test info

- Name: Verify problem user
- Location: C:\Users\Amruta\Desktop\SauceLabs\tests\WebCartApp.spec.js:70:5

# Error details

```
Error: expect(Buffer).toMatchSnapshot(expected)

  175236 pixels (ratio 0.13 of all image pixels) are different.

Expected: C:\Users\Amruta\Desktop\SauceLabs\visual\WebCartApp.spec.js-snapshots\ProblemUser-chromium-win32.png
Received: C:\Users\Amruta\Desktop\SauceLabs\test-results\WebCartApp-Verify-problem-user-chromium\ProblemUser-actual.png
    Diff: C:\Users\Amruta\Desktop\SauceLabs\test-results\WebCartApp-Verify-problem-user-chromium\ProblemUser-diff.png

    at CartPage.verifyProblemUser (C:\Users\Amruta\Desktop\SauceLabs\pages\cart.js:85:66)
    at C:\Users\Amruta\Desktop\SauceLabs\tests\WebCartApp.spec.js:77:5
```

# Page snapshot

```yaml
- button "Open Menu"
- img "Open Menu"
- text: Swag Labs Products Name (A to Z)
- combobox:
  - option "Name (A to Z)" [selected]
  - option "Name (Z to A)"
  - option "Price (low to high)"
  - option "Price (high to low)"
- link "Sauce Labs Backpack":
  - /url: "#"
  - img "Sauce Labs Backpack"
- link "Sauce Labs Backpack":
  - /url: "#"
- text: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
- button "Add to cart"
- link "Sauce Labs Bike Light":
  - /url: "#"
  - img "Sauce Labs Bike Light"
- link "Sauce Labs Bike Light":
  - /url: "#"
- text: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. $9.99
- button "Add to cart"
- link "Sauce Labs Bolt T-Shirt":
  - /url: "#"
  - img "Sauce Labs Bolt T-Shirt"
- link "Sauce Labs Bolt T-Shirt":
  - /url: "#"
- text: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt. $15.99
- button "Add to cart"
- link "Sauce Labs Fleece Jacket":
  - /url: "#"
  - img "Sauce Labs Fleece Jacket"
- link "Sauce Labs Fleece Jacket":
  - /url: "#"
- text: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. $49.99
- button "Add to cart"
- link "Sauce Labs Onesie":
  - /url: "#"
  - img "Sauce Labs Onesie"
- link "Sauce Labs Onesie":
  - /url: "#"
- text: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. $7.99
- button "Add to cart"
- link "Test.allTheThings() T-Shirt (Red)":
  - /url: "#"
  - img "Test.allTheThings() T-Shirt (Red)"
- link "Test.allTheThings() T-Shirt (Red)":
  - /url: "#"
- text: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton. $15.99
- button "Add to cart"
- contentinfo:
  - list:
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { error } from 'console';
   3 | exports.CartPage = class CartPage {
   4 |
   5 |     constructor(page) {
   6 |         this.page = page;
   7 |         this.errMsg = page.locator('h3');
   8 |         this.cards = this.page.locator('.inventory_item_description');
   9 |         this.cardTitles = this.cards.locator('.inventory_item_name ');
   10 |         this.addToCartBtn = this.cards.locator('.pricebar button');
   11 |         this.cartButton = this.page.locator('#shopping_cart_container');
   12 |         this.cartItems = this.page.locator('.inventory_item_name');
   13 |         this.checkout = this.page.locator("text=Checkout");
   14 |         this.allImgs = this.page.locator('img[data-test*="inventory-item"]');
   15 |         this.firstImg = this.page.locator('img[data-test*="sauce-labs-backpack-img"]');
   16 |         this.secondImg = this.page.locator('img[data-test="item-sauce-labs-backpack-img"]');
   17 |     }
   18 |
   19 |     // This function adds items to the cart
   20 |     async addItemsToCart(itemNames) {
   21 |         const titles = await this.cardTitles.allTextContents();
   22 |         const count = await this.cards.count();
   23 |
   24 |         for(let i=0; i<count; i++) {
   25 |             const actualTitle = await this.cards.nth(i).locator('.inventory_item_name ').textContent();
   26 |             if(itemNames.includes(actualTitle)) {
   27 |                 await this.cards.nth(i).locator("text= Add To Cart").click();
   28 |             }
   29 |         }
   30 |     }
   31 |
   32 |     // This function clicks on cart button
   33 |     async clickOnCart() {
   34 |         await this.cartButton.click();
   35 |         expect(await this.page.screenshot({fullPage: true})).toMatchSnapshot('CartPage.png');
   36 |     }
   37 |
   38 |     // This functions verifies items displayed in cart are as per selected items by user
   39 |     async verifyProductsDisplayed(itemNames) {
   40 |         await this.cartItems.first().waitFor();
   41 |         const count = this.cartItems.count();
   42 |
   43 |         for(let i=0; i<count; i++) {
   44 |             const flag = this.page.locator('div.inventory_item_name:hasText("'+itemNames.nth(i)+'")');
   45 |             expect(flag).toBeTruthy();
   46 |         }
   47 |     }
   48 |
   49 |     // This function clicks on checkout button
   50 |     async checkoutCart() {
   51 |         await this.checkout.click();
   52 |     }
   53 |
   54 |     // This function verifies that error message is displayed for locked out user 
   55 |     async verifyLockedOutUser(message) {
   56 |         this.errMsg.waitFor();
   57 |         const error = await this.errMsg.textContent();
   58 |         console.log(error);
   59 |
   60 |         if(error.includes(message)) {
   61 |             expect(await this.page.screenshot({fullPage: true})).toMatchSnapshot('LockedUser.png');
   62 |             console.log("Error message for locked out user verified");
   63 |             expect(true).toBeTruthy();
   64 |         } else {
   65 |             console.log("Error message for locked out user is not verified");
   66 |             console.log("Actual Error Message : " + error);
   67 |             console.log("Expected Error Message : " + message);
   68 |             expect(false).toBeTruthy();
   69 |         }
   70 |     }
   71 |
   72 |     // This function verifies problem user functionality
   73 |     async verifyProblemUser() {
   74 |         const count = await this.allImgs.count();
   75 |         const allSrc = [];
   76 |         for(let i=0; i<count; i++) {
   77 |             const src = await this.allImgs.nth(i).getAttribute('src');
   78 |             allSrc.push(src);
   79 |         }
   80 |         const firstSrc = allSrc[0];
   81 |         const allSame = allSrc.every(src => src === firstSrc);
   82 |         
   83 |         if(allSame) {
   84 |             console.log("This is a problematic user.");
>  85 |             expect(await this.page.screenshot({fullPage: true})).toMatchSnapshot('ProblemUser.png');
      |                                                                  ^ Error: expect(Buffer).toMatchSnapshot(expected)
   86 |             expect(true).toBeTruthy();
   87 |         } else {
   88 |             console.log("This is not a problematic user.");
   89 |             expect(true).toBeFalsy();
   90 |         }
   91 |     }
   92 |
   93 |     // This function verifies error user functionality
   94 |     async verifyErrorUser() {
   95 |         await this.addToCartBtn.nth(0).click();
   96 |         const removeBtn = await this.addToCartBtn.nth(0).textContent();
   97 |         const addToCartBtn = await this.addToCartBtn.nth(0).textContent();
   98 |
   99 |         if(addToCartBtn != "Add to Cart"){
  100 |             expect(await this.page.screenshot({fullPage: true})).toMatchSnapshot('ErrorUser.png');
  101 |             console.log('Error user verified successfully');
  102 |             expect(true).toBeTruthy();
  103 |         } else {
  104 |             console.log('Unable to verify error user');
  105 |             console.log('Unable to click on Remove button');
  106 |             expect(false).toBeTruthy();
  107 |         }
  108 |     }
  109 |
  110 |     // This function verifies visual user functionality
  111 |     async verifyVisualUser() {
  112 |         const firstSrc = await this.firstImg.getAttribute('src');
  113 |         await this.firstImg.click();  
  114 |         await this.page.waitForTimeout(1000);     
  115 |         const secondSrc = await this.secondImg.getAttribute('src');
  116 |         
  117 |         if(!(firstSrc == secondSrc)) {
  118 |             expect(await this.page.screenshot({fullPage: true})).toMatchSnapshot('VisualUser.png');
  119 |             console.log('Visual user verified successfully');
  120 |             expect(true).toBeTruthy();
  121 |         } else {
  122 |             console.log('Unable to verify visual user');
  123 |             console.log("Actual image source : " + firstSrc);
  124 |             console.log("Expected image source : " + secondSrc);
  125 |             expect(false).toBeTruthy();
  126 |         }
  127 |     }
  128 |
  129 | }
```