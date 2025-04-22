exports.CheckoutPage = class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.firstName = page.locator('input[name="firstName"]');
        this.lastName = page.locator('input[name="lastName"]');
        this.postalCode = page.locator('div.checkout_info input');
        this.continueBtn = page.locator('input[value="Continue"]');
    }

    // This function fills and submit checkout form
    async checkoutForm() {
        await this.firstName.fill('Secret');
        await this.lastName.fill('Santa');
        await this.postalCode.last().fill('123456'); 
        await this.continueBtn.click();       
    }

}