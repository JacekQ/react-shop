import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

function StripeCheckoutButton({price}) {
  const priceForStripe = price* 100;
  const publishableKey = 'pk_test_5ig8T1ysrQyezMxgxfS2diK500zJb87YeS';

  const onToken = token => {
    console.log(token);
    alert('Payment successful!')
  }
  
  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Brave Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Cuz.svg'
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
