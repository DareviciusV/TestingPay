class checkoutPage {

    elements = {

        checkoutButton: () => cy.get("button").contains("Checkout")

    }

    clickCheckout() {

        this.elements.checkoutButton().click({ force: true });
    }

    checkTitle() {

        cy.title().should("eq", "TestingPay - CoinGate Sandbox")
    }

    checkUrl() {
        cy.url().should("include", "coingate.com")
    }




}

module.exports = new checkoutPage();