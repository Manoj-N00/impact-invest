import Stripe from 'stripe';
const stripe = new Stripe('sk_test_tR3PYbcVNZZ796tH88S4VQ2u', {
  apiVersion: '2024-11-20',
});

// Example of creating a payment method
const createPaymentMethod = async () => {
  const paymentMethod = await stripe.paymentMethods.create({
    type: 'us_bank_account',
    us_bank_account: {
      account_holder_type: 'individual',
      account_number: '000123456789',
      routing_number: '110000000',
    },
    billing_details: {
      name: 'John Doe',
    },
  });

  console.log(paymentMethod);
};

// Example of retrieving a payment method
const retrievePaymentMethod = async () => {
  const paymentMethod = await stripe.customers.retrievePaymentMethod(
    'cus_9s6XKzkNRiz8i3',
    'pm_1NVChw2eZvKYlo2CHxiM5E2E'
  );

  console.log(paymentMethod);
};

// Call the functions
createPaymentMethod();
retrievePaymentMethod();
