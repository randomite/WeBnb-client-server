import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import BookingDetails from '../ui/BookingDetails';
import Header from '../ui/Header';
import store from './../../redux/store';
import moment from 'moment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
const rewards= require("./rewards_data");

// const amount = store.getState().booking.room.price;
// const startDate = store.getState().booking.startDate.format('YYYY-DD-MM');
// const endDate = store.getState().booking.endDate.format('YYYY-DD-MM');
// const total = (amount * (endDate.diff(startDate)) + 40);
    
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
        ev.preventDefault();
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
            address_country: country,
            //amount: amount
        });
        let response = await fetch("https://webnb-staging.herokuapp.com/api/charge?amount={amount}", {
          method: "POST",
          headers: {"Content-Type": "text/plain"},
          body: token.id
        });
      
        if (response.ok) console.log("Successful Transaction");
    }

    progress = () => {
        let len = rewards.freeNights.length;
        let last = rewards.freeNights[len - 1];
        let nights = rewards.freeNights.length;
        if (len === 0) {
          nights = 0;
        } else if (last.includes(0)) {
          nights = nights - 1;
          rewards.freeNights.pop();
        }
        console.log(nights);
        return nights;
    };

    renderNightsInfo = () => {
        if (this.progress() > 0) {
           return <p className="p_1">You currently have accumulated {this.progress()} nights worth of rewards.</p>
        }
        else {
           return <p>You currently have no rewards to claim.</p>
        }
    };

    renderRewardsInfo = () => {
        const nights = rewards.freeNights;
        const getSum = (total, num) => total + num;
        return nights.map((index, i) => {
            const sum = index.reduce(getSum);
            const average = sum / 10;
            return <div><p>Average of free night {i + 1}: ${average}</p> <button >Apply</button></div>
        });
    };

    render() { 
        return (
            <React.Fragment>
                <Header/>
            <div className="checkout">
                <h2>Confirm and Pay</h2> <br/><br/><br/>
                <h4>BILLING INFORMATION</h4>
                <div className="billing-container">
                <div className="billing-item">
                    <span className="text">Name</span>
                </div>
                <div className="billing-item">
                    <OutlinedInput id="name" className="billing-input" placeholder="John Doe"/>
                </div>
                <div className="billing-item">
                    <span className="text">Email</span>
                </div>
                <div className="billing-item">
                    <OutlinedInput className="billing-input" placeholder="@"/>
                </div>
                <div className="billing-item">
                    <span className="text">Address</span>
                </div>
                <div className="billing-item">
                    <OutlinedInput id="address_line1" className="billing-input" placeholder="111"/>
                </div>
                <div className="billing-item">
                    <span className="text">City</span>
                </div>
                <div className="billing-item">
                    <OutlinedInput id="address_city" className="billing-input" placeholder="City"/>
                </div>
                <div className="billing-item">
                    <span className="text">State</span>
                </div>
                <div className="billing-item">
                    <OutlinedInput id="address_state" className="billing-input" placeholder="CA"/>
                </div>
                <div className="billing-item">
                    <span className="text">Country</span>
                </div>
                <div className="billing-item">
                    <OutlinedInput id="address_country" className="billing-input" placeholder="USA"/>
                </div>
                </div> 
                
                <br/>

                <h4>PAYMENT INFORMATION</h4>
                <div className="payment">
                    <CardElement style={style} />
                </div>  <br/>

                <h4>REWARDS INFORMATION</h4>
                <div className="rewards_info">
                    {this.renderNightsInfo()}
                    {this.renderRewardsInfo()}

                </div> <br/> <br/>

                <button onClick={this.submit}>Checkout</button>
            </div>
            <div className="payment_details">
            <BookingDetails label="Checkout"/>
            </div>
            </React.Fragment>
         );
    }
}
 
export default injectStripe(Payment);
