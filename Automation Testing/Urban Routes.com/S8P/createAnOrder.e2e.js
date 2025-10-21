const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should set the address', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    })
        
    it('should select the Supportive plan', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.waitForDisplayed();
        await supportiveButton.click();
        const activeSupportTcard = await $(page.activeSupportTcard);
        const isActive = await activeSupportTcard.getAttribute('class');
        expect(isActive).toContain('active');
    })
    
    it('should fill in the phone number', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('should Add a credit card', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const PaymentMethodButton = await $(page.PaymentMethodButton);
        await PaymentMethodButton.waitForDisplayed();
        await PaymentMethodButton.click();
        const addCardButton = await $(page.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        const addingCardModal = await $(page.addingCardModal);
        await addingCardModal.waitForDisplayed();
        const cardNumberField = await $(page.cardNumberField);
        const cardNumber = helper.getRandomCardnumber();
        await cardNumberField.waitForDisplayed();
        await cardNumberField.click();
        await cardNumberField.setValue(cardNumber);
        const cardCodeField = await $(page.cardCodeField);
        await cardCodeField.waitForDisplayed();
        await cardCodeField.setValue(12);
        const linkButton = await $(page.linkButton);
        await linkButton.waitForDisplayed();
        await linkButton.click(); 
        const cardCheckBox = await $(page.cardCheckBox);
        const paymentMethodModal = await $(page.paymentMethodModal);
        await paymentMethodModal.waitForExist();
        await cardCheckBox.waitForExist();
        const isChecked = await cardCheckBox.getAttribute('checked');
        expect(isChecked).toBe('true');
    });
                  
    it('should write the driver a message', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const driverMessageField = await $(page.driverMessageField);
        await driverMessageField.waitForDisplayed();
        await driverMessageField.setValue("Drive safe and hurry");
        const message = "Drive safe and hurry";
        const actualValue = await driverMessageField.getValue();
        expect(actualValue).toBe(message);
    });
       
    it('should order a Blanket and handkerchiefs', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.waitForDisplayed();
        await supportiveButton.click();
        const blanketButton = await $(page.blanketButton);
        await blanketButton.scrollIntoView();
        await blanketButton.waitForDisplayed();
        await blanketButton.click();
        await expect(blanketButton).toBeEnabled(true);
});

    it('should order 2 Ice creams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.waitForDisplayed();
        await supportiveButton.click();
        const icecreamPlus = await $(page.icecreamPlus);
        await icecreamPlus.waitForDisplayed();
        await icecreamPlus.click();
        await icecreamPlus.click();
        const counterValue = await $(page.counterValue);
        const count = await counterValue.getText();
        expect(count).toContain('2');
    })
  
    it('should display the car search modal and driver info', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        const driverMessageField = await $(page.driverMessageField);
        await driverMessageField.waitForDisplayed();
        await driverMessageField.setValue("Drive safe and hurry");
        const orderButton = await $(page.orderButton);
        await orderButton.waitForDisplayed();
        await orderButton.click();
        const driverDetailsButton = await $(page.driverDetailsButton);
        await driverDetailsButton.waitForDisplayed();
        await driverDetailsButton.click();
        const detailsModal = await $(page.detailsModal);
        await detailsModal.waitForDisplayed({timeout: 30000});
        await expect(detailsModal).toBeDisplayed();
    })
})
