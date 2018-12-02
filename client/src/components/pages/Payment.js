import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import BookingDetails from '../ui/BookingDetails';

const style = {
    base: {
      iconColor: '#666ee8',
      color: '#31325f',
      fontWeight: 400,
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '15px',
      '::placeholder': {
        color: '#aab7c4',
      },
      ':-webkit-autofill': {
        color: '#666ee8',
      },
    },
};

class Payment extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        var name = document.getElementById('name').value;
        var address_line = document.getElementById('address_line1').value;
        var city = document.getElementById('address_city').value;
        var state = document.getElementById('address_state').value;
        var country = document.getElementById('address_country').value;
        
        let {token} = await this.props.stripe.createToken('token_info', {
            name: name,
            address_line1: address_line,
            address_city: city,
            address_state: state,
            address_country: country
        });
        let response = await fetch("/charge", {
          method: "POST",
          headers: {"Content-Type": "text/plain"},
          body: token.id
        });
      
        if (response.ok) console.log("Successful Transaction");
    }
    
    render() { 
        return (
            <React.Fragment>
            <div className="checkout">
                <h2>Confirm and Pay</h2> <br/><br/><br/>
                <h4>BILLING INFORMATION</h4>
                <div className="billing-container">
                <div className="billing-item">
                    <span className="text">Name</span>
                </div>
                <div className="billing-item">
                    <input id="name" className="billing-input" placeholder="John Doe"/>
                </div>
                <div className="billing-item">
                    <span className="text">Email</span>
                </div>
                <div className="billing-item">
                    <input className="billing-input" placeholder="@"/>
                </div>
                <div className="billing-item">
                    <span className="text">Address</span>
                </div>
                <div className="billing-item">
                    <input id="address_line1" className="billing-input" placeholder="111"/>
                </div>
                <div className="billing-item">
                    <span className="text">City</span>
                </div>
                <div className="billing-item">
                    <input id="address_city" className="billing-input" placeholder="City"/>
                </div>
                <div className="billing-item">
                    <span className="text">State</span>
                </div>
                <div className="billing-item">
                    <input id="address_state" className="billing-input" placeholder="CA"/>
                </div>
                <div className="billing-item">
                    <span className="text">Country</span>
                </div>
                <div className="billing-item">
                    <input id="address_country" className="billing-input" placeholder="USA"/>
                </div>
                </div> 
                
                <br/>

                <h4>PAYMENT INFORMATION</h4>
                <div className="payment">
                    <CardElement style={style} />
                </div>

                <button onClick={this.submit}>Checkout</button>
            </div>
            <div className="payment_details">
            <BookingDetails />
            </div>
            </React.Fragment>
         );
    }
}
 
export default injectStripe(Payment);
