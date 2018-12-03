import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import BookingDetails from '../ui/BookingDetails';
import Header from '../ui/Header';
import store from './../../redux/store';
import moment from 'moment';
import {instance} from '../../Axios';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {withRouter} from 'react-router-dom';

const rewards= require("./rewards_data");

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
        this.state = {
            rewards: [],
            days: 0
        }
        this.submit = this.submit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // componentWillMount() {
    //     setTimeout(
    //         function() {
    //             instance
    //                 .get("/rewards?email=" + store.getState().user.email)
    //                 .then(response => {
    //                     console.log(response);
    //                     this.setState({rewards: response.data});
    //                 })
    //                 .catch(err => alert(err));
    //         }.bind(this),
    //         4000
    //     );

    //     setTimeout(
    //         function() {
    //           this.setState({ days: this.progress() });
    //         }.bind(this),
    //         6000
    //     );
    // }

    async submit(ev) {     
        const amount = store.getState().booking.room.price;
        const startDate = store.getState().booking.startDate;
        const endDate = store.getState().booking.endDate;
        const total = ((amount * (moment(endDate).diff(startDate, 'days'))) + 40);
        
        const user_id = store.getState().user.email;
        const room_id = store.getState().booking.room.id;
        const hotel_id = store.getState().booking.hotel_id;

        const payment_data = {
            amount: total
        }
        
        const booking_data = {
            user_id: user_id,
            hotel_id: hotel_id,
            room_id: room_id,
            date_checkin: startDate.format("YYYY-MM-DD"),
            date_checkout: endDate.format("YYYY-MM-DD")
        }

        const rewards_data = {
            price: amount,
            numOfNights: (moment(endDate).diff(startDate, 'days')),
            email: user_id
        }

        instance
            .post("charge", payment_data)
            .then(response => {
                console.log(response);
                instance
                    .post("booking/", booking_data)
                    .then(response => {
                        console.log(response);
                        instance
                            .post("rewards/", rewards_data)
                            .then(response => console.log(response))
                            .catch(error => alert(error));
                    })
                    .catch(error => alert(error));

            })
            .catch(error => alert(error))
    }

    async handleDelete(ev) {
        //get diff from total and reward
        //call to backend to delete reward        
    }

    // progress = () => {
    //     const { rewards } = this.state
    //     let len = rewards.freeNights.length;
    //     let last = rewards.freeNights[len - 1].length;
    //     let nights = rewards.freeNights.length;
    //     if (len === 0) {
    //       nights = 0;
    //     } else if (last < 10) {
    //       nights = nights - 1;
    //     }
    //     console.log(nights);
    //     return nights;
    // };

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

    renderNumOfNightsInfo = () => {
        if (this.progress() > 0) {
           return <p className="p_1">You currently have accumulated {this.progress()} nights worth of rewards.</p>
        }
        else {
           return <p className="p_1">You currently have no rewards to claim.</p>
        }
    };

    // renderRewardsInfo = () => {
    //     const { rewards } = this.state;
    //     const nights = rewards.freeNights.length;
    //     return nights.map(index => {
    //         return <div><p>Average of free night {index + 1}: ${rewards.average[index]}</p> <button onClick={this.handleDelete}>Apply</button></div>
    //     });
    // };

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
                    </div>  <br/>

                    <h4>PAYMENT INFORMATION</h4>
                    <div className="payment">
                        <CardElement style={style} />
                    </div>  <br/>

                    <h4>REWARDS INFORMATION</h4>
                    <div className="rewards_info">
                        {this.renderNumOfNightsInfo()}
                        {this.renderRewardsInfo()}

                    </div> <br/> <br/>

                </div>
                <div className="payment_details">
                    <BookingDetails label="Checkout" onButtonClick={this.submit}/>
                </div>
            </React.Fragment>
         );
    }
}
 
export default withRouter(injectStripe(Payment));
