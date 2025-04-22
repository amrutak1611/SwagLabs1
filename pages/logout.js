exports.LogoutPage = class LogoutPage {

    constructor(page) {
        this.page = page;
        this.backHomeButton = page.getByRole('button', { name : 'Back Home' });
        this.menuIconButton = page.getByRole('button', { name : 'Open Menu' });
        this.logoutLink = page.locator('a#logout_sidebar_link');
    }

    async logoutFromApp() {
        await this.backHomeButton.click();
        await this.menuIconButton.click();
        await this.logoutLink.click();
    }

}