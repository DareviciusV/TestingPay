class invoicePage {

    elements = {

        bitcoinSelection: () => cy.get(".currency-card").contains(".currency-card-currency-title", "Bitcoin"),
        checkoutInvoice: () => cy.get("#invoice-checkout-button"),
        paidOut: () => cy.get(`[data-test*="button-mark-as-paid"]`).should('exist').and("be.enabled")





    }

    checkInvoice() {
        cy.get("#invoice-paid h2").should("have.text", "Paid and Confirmed");
    }

    checkViewReceiptEnabled() {
        cy.get("button.btn.btn-default.btn-sm").contains("View Receipt").should("be.enabled")
    }

    markAsPaid() {
        this.elements.paidOut().click()
    }


    checkQrCode() {
        cy.get("#invoice-qr-code").should("exist");
    }

    checkSpinner() {
        cy.get('.ant-spin-dot.ant-spin-dot-spin').then(($spin) => {
            if ($spin.is(':visible')) {
                cy.wait(10000)
            }
            cy.get('.ant-alert-message').then(($message) => {
                if ($message.is(':visible')) {
                    cy.get("#bitcoin-ln-switch").click()
                }
            })
        });
    }

    turnOnLightingNetwork() {
        cy.get("#bitcoin-ln-switch").click()
    }

    selectAndTypeEmail(email) {
        cy.get("input#invoice-email").should("be.visible").click().type(email);
    }


    clickCheckout() {
        this.elements.checkoutInvoice().click();
    }

    clickBitcoin() {

        this.elements.bitcoinSelection().click()
    }

    checkInvoicePage() {
        cy.get("h2.text-center").should("have.text", "Select payment currency");
    }




}

module.exports = new invoicePage();