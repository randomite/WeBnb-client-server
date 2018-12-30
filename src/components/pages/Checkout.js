import React, { Component } from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import Payment from '../pages/Payment';

class Checkout extends Component {
    render() { 
        return ( 
            <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
                <div className="example">         
                    <Elements>
                        <Payment />
                    </Elements>
                </div>
            </StripeProvider>
         );
    }
}
 
export default Checkout;
