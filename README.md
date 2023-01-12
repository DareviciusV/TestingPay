# Invoice Automation
## Testing payment with Cypress automation tool

This repository contains a Cypress test suite for automating the process of paying an invoice using cryptocurrency on the CoinGate sandbox website. The test visits the website, selects Bitcoin as the payment method, turns on the Lighting network for instant payments, enters an email, and clicks the checkout button. It then checks for the presence of a QR code and marks the invoice as paid. The test also includes various assertions to check the state of the website at various points throughout the process.

# Install

**npm install** to install modules


# Prerequisites

Node.js and npm installed on your machine
Cypress installed on your machine

# Running the tests

**npx cypress open** to open the Cypress test runner

**npx cypress run --browser chrome** to open Chrome headless

**npx cypress run --browser edge** to open edge headless

**npx cypress run --browser firefox** to open firefox headless

**npx cypress run --browser electron** to open electron headless


# Built With
Cypress - JavaScript end-to-end testing framework

