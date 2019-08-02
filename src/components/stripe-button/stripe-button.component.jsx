import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { myPublishableKey } from './stripe-key';

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = myPublishableKey || '';

  const onToken = token => {
    console.log(token);
    alert('Payment successful!');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Brave Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
