exports.InventoryPage = class InventoryPage {

    constructor(page) {
        this.page = page;
        this.dropdown = page.locator('.product_sort_container');
    }

    // This function selects option from dropdown
    async selectDropdown(option) {
        await this.dropdown.click();
        await this.dropdown.selectOption(option);
    }

}