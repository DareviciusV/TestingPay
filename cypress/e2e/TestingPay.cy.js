import checkoutPage from "../page-objects/checkout-page";
import invoicePage from "../page-objects/invoice-page";

describe("Invoice automation", function () {
    beforeEach(function () {
        // Visits a website and waits website to load
        cy.visit('https://pay-sandbox.coingate.com/pay/TestingPay');
        cy.wait(3000);
    });

    it("Exchanges Cryptocurrency for Eur.", function () {

        // Check website title
        checkoutPage.checkTitle()
        // Checks website url
        checkoutPage.checkUrl()

        // Clicks checkout button
        checkoutPage.clickCheckout()

        // Checks if website loaded with text "Select payment currency"
        invoicePage.checkInvoicePage()

        // Selects Bitcoin
        invoicePage.clickBitcoin()

        // Turns on Lighting network for instant payments
        invoicePage.turnOnLightingNetwork()

        // Selects and enters an email
        invoicePage.selectAndTypeEmail("automation@cypress.com")

        // Pays with Bitcoin
        invoicePage.clickCheckout()

        // Checks if lighting network work if not turns it off.
        invoicePage.checkSpinner()

        // Tries to pay without Lighting network
        invoicePage.clickCheckout()

        // Check if QR Code available
        invoicePage.checkQrCode()

        // Marks invoice as paid
        invoicePage.markAsPaid()

        //Checks if message of succesfull payment available
        invoicePage.checkInvoice()

        // Checks if button for receipt is enabled and clickable
        invoicePage.checkViewReceiptEnabled()
    });

    afterEach(function () {
        cy.end();

    });
});