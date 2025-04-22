import { LoginPage } from '../pages/login';
import { InventoryPage } from '../pages/inventory';
import { SortPage } from '../pages/sort';
import { CartPage } from '../pages/cart';
import { CheckoutPage } from '../pages/checkout';
import { OrdersPage } from '../pages/orders';
import { LogoutPage } from '../pages/logout';

exports.POManager = class POManager {

    constructor(page) {
        this.page = page;
        this.login = new LoginPage(this.page);
        this.inventory = new InventoryPage(this.page);
        this.sort = new SortPage(this.page);
        this.cart = new CartPage(this.page);
        this.checkout = new CheckoutPage(this.page);
        this.order = new OrdersPage(this.page);
        this.logout = new LogoutPage(this.page);
    }

    getLoginPage() {
        return this.login;
    }

    getInventoryPage() {
        return this.inventory;
    }

    getSortPage() {
        return this.sort;
    }

    getCartPage() {
        return this.cart;
    }

    getCheckoutPage() {
        return this.checkout;
    }

    getOrdersPage() {
        return this.order;
    }

    getLogoutPage() {
        return this.logout;
    }
}