import { test } from '@playwright/test';
import { POManager } from '../pages/pomanager';
const dataset = require('../utils/testData.json');

test('Verify standard user', async ({browser}, testInfo) => {
    const context = await browser.newContext({
        recordVideo: {
            dir: './videos/StandardUser/'
        }
    });
    const page = await context.newPage();
    const pom = new POManager(page);

    const login = pom.getLoginPage();
    const inventory = pom.getInventoryPage();
    const sort = pom.getSortPage();
    const cart = pom.getCartPage();
    const checkout = pom.getCheckoutPage();
    const order = pom.getOrdersPage();
    const logout = pom.getLogoutPage();

    await login.gotoLoginPage();
    await login.accessibilty(testInfo);
    await login.loginToApp(dataset.user, dataset.pass);
    await inventory.selectDropdown(dataset.selectByName);
    await sort.sortByNameDesc();

    await inventory.selectDropdown(dataset.selectByPrice);
    await sort.sortByPriceDesc();

    await cart.addItemsToCart(dataset.itemNames);
    await cart.clickOnCart();
    await cart.verifyProductsDisplayed(dataset.itemNames);
    await cart.checkoutCart();

    await checkout.checkoutForm();

    await order.verifyItemsTotal();
    const orderId = await order.getOrderId();
    console.log(orderId);
    await order.finish();
    
    await logout.logoutFromApp(); 
    
    await page.close();   
    await context.close();
});

test('Verify locked out user', async ({browser}) => {
    const context = await browser.newContext({
        recordVideo: {
            dir: './videos/LockedOutUser/'
        }
    });
    const page = await context.newPage();
    const pom = new POManager(page);
    const login = pom.getLoginPage();
    const cart = pom.getCartPage();
    
    await login.gotoLoginPage();
    await login.loginToApp(dataset.lockeduser, dataset.pass);
    await cart.verifyLockedOutUser(dataset.lockedErrMsg);

    await page.close();   
    await context.close();
});

test('Verify problem user', async ({browser}) => {
    const context = await browser.newContext({
        recordVideo: {
            dir: './videos/ProblemUser/'
        }
    });
    const page = await context.newPage();
    const pom = new POManager(page);
    const login = pom.getLoginPage();
    const cart = pom.getCartPage();
    
    await login.gotoLoginPage();
    await login.loginToApp(dataset.problemuser, dataset.pass);
    await cart.verifyProblemUser();
    
    await page.close();   
    await context.close();
});

test('Verify error user', async ({browser}) => {
    const context = await browser.newContext({
        recordVideo: {
            dir: './videos/ErrorUser/'
        }
    });
    const page = await context.newPage();
    const pom = new POManager(page);
    const login = pom.getLoginPage();
    const cart = pom.getCartPage();
    
    await login.gotoLoginPage();
    await login.loginToApp(dataset.erroruser, dataset.pass);
    await cart.verifyErrorUser();

    await page.close();   
    await context.close();
});

test('Verify visual user', async ({browser}) => {
    const context = await browser.newContext({
        recordVideo: {
            dir: './videos/VisualUser/'
        }
    });
    const page = await context.newPage();
    const pom = new POManager(page);
    const login = pom.getLoginPage();
    const cart = pom.getCartPage();
    
    await login.gotoLoginPage();
    await login.loginToApp(dataset.visualuser, dataset.pass);
    await cart.verifyVisualUser();

    await page.close();   
    await context.close();
});