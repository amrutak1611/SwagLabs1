import { expect } from '@playwright/test';
exports.OrdersPage = class OrdersPage {

    constructor(page) {
        this.page = page;
        this.orderId = page.locator('.summary_value_label');
        this.expectedItemsTotal = page.locator('.summary_subtotal_label');
        this.actualPrices = page.locator('.inventory_item_price');
        this.taxAmount = page.locator('.summary_tax_label');
        this.total = page.locator(".summary_total_label");
        this.finishBtn = page.locator('#finish');
        this.successMessage = page.locator('h2.complete-header');
    }

    // This function verifies items total
    async verifyItemsTotal() {
        await this.actualPrices.first().waitFor();
        
        const itemPrices = await this.actualPrices.allTextContents();
        const actualItemsTotal = await itemPrices.map(np => Number(np.replace('$',''))).reduce((sum, p)=> sum+p,0); 

        const expectedItemsTotal = await this.expectedItemsTotal.textContent();
        expect(actualItemsTotal).toEqual(Number(expectedItemsTotal.split('$')[1]));

        console.log('Items total is verified');

        const taxAmount = await this.taxAmount.textContent();
        const actualTotal = Number(expectedItemsTotal.split('$')[1]) + Number(taxAmount.split('$')[1]);

        const total = await this.total.textContent();
        const expectedTotal = Number(total.split('$')[1]);
        expect(actualTotal).toEqual(expectedTotal);
        console.log('Total is verified');
        expect(await this.page.screenshot({fullPage: true})).toMatchSnapshot('OrdersPage.png');
    }

    //This function returns order id
    async getOrderId() {
        return await this.orderId.first().textContent();
    }

    // This function clicks on finish button and verifies order success message
    async finish() {
        await this.finishBtn.click();
        console.log(await this.successMessage.textContent());
    }

}