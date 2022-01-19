import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert('Payment successful');
}

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishabelKey = 'pk_test_51KJTw0EnYo6l9knp4wByp8jH4NB4t0NHTqcH4phk77DY2URlFE8Du44jG2X572BMpCHALCp5ZCOEOAuM477OiO7e00GYiyDQ20';

    return(
        <StripeCheckout
            label='Pay Now' 
            name='Crown Clothing' 
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`'Your total is $${price}'`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishabelKey}
        />
    )
}

export default StripeCheckoutButton;