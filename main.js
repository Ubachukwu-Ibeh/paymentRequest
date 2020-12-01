const supportedPaymentMethods = [{
        supportedMethods: ['basic-card']
    }],
    details = {
        total: {
            label: 'Total Cost',
            amount: {
                currency: 'GBP',
                value: 30
            }
        }
    }

const paymentRequest = new PaymentRequest(supportedPaymentMethods, details, {});
paymentRequest.show();