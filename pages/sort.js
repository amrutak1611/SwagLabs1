import { expect } from '@playwright/test';
exports.SortPage = class SortPage {

    constructor(page) {
        this.page = page;
        this.cardNames = page.locator('.inventory_item_name');
        this.cardPrices = page.locator('.inventory_item_price');
    }

    // This function sorts all the items by name in decending order (Z-A)
    async sortByNameDesc() {
        await this.cardNames.first().waitFor();
        const itemTitles = await this.cardNames.allTextContents();
        const sortedTitles = itemTitles.sort((a, b) => b.localeCompare(a));

        expect(itemTitles).toEqual(sortedTitles);
        expect(await this.page.screenshot({fullPage: true})).toMatchSnapshot('SortZAPage.png');
        console.log('Items are sorted Z-A');
    }

    // This function sorts all the items by price in decending order (High to low)
    async sortByPriceDesc() {
        await this.cardPrices.first().waitFor();
        const itemPrices = await this.cardPrices.allTextContents();
        const newPrices = await itemPrices.map(np => Number(np.replace('$',''))); 
        const sortedPrices = newPrices.sort((a, b) => (b-a));
        
        expect(newPrices).toEqual(sortedPrices);
        expect(await this.page.screenshot({fullPage: true})).toMatchSnapshot('SortHiloPage.png');
        console.log('Items are sorted - high to low prices');
    }
}