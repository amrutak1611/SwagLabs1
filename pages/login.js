import { expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.usernameField = page.getByPlaceholder('Username');
        this.passwordField = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name : 'Login' });
        this.title = page.locator('.login_logo');
    }

    // This function hits sauce demo URL
    async gotoLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
        await this.title.waitFor();
        expect(await this.page.screenshot({fullPage: true})).toMatchSnapshot('LoginPage.png');
    }

    async accessibilty(testInfo) {
        const page = this.page;
        const axeBuilder = await new AxeBuilder({page})
            .withTags("wcag2a", "wcag2aa", "wcag21a", "wcag21aa")
            .analyze();

        await testInfo.attach('accessibility-scan-results', {
            body: JSON.stringify(axeBuilder, null, 2),
            contentType: 'application/json'
        });
        expect(axeBuilder.violations).toEqual([]);
    }

    // This function enters login credentials and logs into App
    async loginToApp(username, password) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

}