import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import BookingDetails from "../ui/BookingDetails";
import RewardsPopper from "../ui/RewardsPopper";
import Header from "../ui/Header";
import store from "./../../redux/store";
import moment from "moment";
import { instance } from "../../Axios";
import {OutlinedInput, Slide, Switch, FormControlLabel} from "@material-ui/core/";
import { withRouter } from "react-router-dom";


const style = {
  base: {
    iconColor: "#666ee8",
    color: "#31325f",
    fontWeight: 400,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    fontSmoothing: "antialiased",
    fontSize: "15px",
    "::placeholder": {
      color: "#aab7c4"
    },
    ":-webkit-autofill": {
      color: "#666ee8"
    }
  }
};

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rewards: [],
      days: 0,
      selectedDiscount: 0,
      discountIndex: null,
      checked: false
    };
    this.submit = this.submit.bind(this);
  }

  calculateDiscount = () => {
    const amount = store.getState().booking.room.price;
    const startDate = store.getState().booking.startDate;
    const endDate = store.getState().booking.endDate;
    const total = amount * moment(endDate).diff(startDate, "days") + 40;
    let diff = total - this.state.selectedDiscount;
    console.log("Sending discounted price: " + diff);
    if (diff === total) {
      console.log("No discounted price");
      return total;
    } else if (diff < 0) {
      console.log("discount final sending price: " + 0);
      return 0;
    } else {
      console.log("discount final sending price: " + diff);
      return Math.floor(diff);
    }
  };

  async submit(ev) {
    const amount = store.getState().booking.room.price;
    const startDate = store.getState().booking.startDate;
    const endDate = store.getState().booking.endDate;

    const user_id = store.getState().user.email;
    const room_id = store.getState().booking.room.id;
    const hotel_id = store.getState().booking.hotel_id;

    const payment_data = {
      amount: this.calculateDiscount()
    };

    const booking_data = {
      user_id: user_id,
      hotel_id: hotel_id,
      room_id: room_id,
      date_checkin: startDate.format("YYYY-MM-DD"),
      date_checkout: endDate.format("YYYY-MM-DD"),
      total_price: this.calculateDiscount()
    };

    const rewards_data = {
      price: amount,
      numOfNights: moment(endDate).diff(startDate, "days"),
      email: user_id
    };

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
              .then(response => {
                console.log(response);
                this.props.history.push("/bookings");
              })
              .catch(error => alert(error));
          })
          .catch(error => alert(error));
      })
      .catch(error => alert(error));
  }

  rewardsCallBack = response => {
    //going to use the discount data here
    this.applyDiscount(response);
  };

  applyDiscount = response => {
    this.setState({
      selectedDiscount: response[0],
      discountIndex: response[1]
    });
  };

  renderNumOfNightsInfo = () => {
    return (
      <div>
        <RewardsPopper link={false} callBackFromParent={this.rewardsCallBack} />
      </div>
    );
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    console.log("check?" + this.state.checked);
    const { checked } = this.state;

    return (
      <React.Fragment>
        <Header />
        <div style={{ width: "100%" }}>
          <h2>Confirm and Pay</h2> <br />
          <div className="checkout">
            <div>
              <br />
              <h4>BILLING INFORMATION</h4>
              <div className="billing-container">
                <div className="billing-item">
                  <span className="text">Name</span>
                </div>
                <div className="billing-item">
                  <OutlinedInput
                    id="name"
                    className="billing-input"
                    placeholder="John Doe"
                  />
                </div>
                <div className="billing-item">
                  <span className="text">Email</span>
                </div>
                <div className="billing-item">
                  <OutlinedInput className="billing-input" placeholder="@" />
                </div>
                <div className="billing-item">
                  <span className="text">Address</span>
                </div>
                <div className="billing-item">
                  <OutlinedInput
                    id="address_line1"
                    className="billing-input"
                    placeholder="111"
                  />
                </div>
                <div className="billing-item">
                  <span className="text">City</span>
                </div>
                <div className="billing-item">
                  <OutlinedInput
                    id="address_city"
                    className="billing-input"
                    placeholder="City"
                  />
                </div>
                <div className="billing-item">
                  <span className="text">State</span>
                </div>
                <div className="billing-item">
                  <OutlinedInput
                    id="address_state"
                    className="billing-input"
                    placeholder="CA"
                  />
                </div>
                <div className="billing-item">
                  <span className="text">Country</span>
                </div>
                <div className="billing-item">
                  <OutlinedInput
                    id="address_country"
                    className="billing-input"
                    placeholder="USA"
                  />
                </div>
              </div>{" "}
              <br />
              <h4>PAYMENT INFORMATION</h4>
              <div className="payment">
                <CardElement style={style} />
              </div>{" "}
              <br />
              <div className="rewards_switch">
                {/*Form Control Label allows you to add text tot the Switch*/}
                <FormControlLabel
                  control={
                    <Switch checked={checked} onChange={this.handleChange} />
                  }
                  label="Apply Rewards?"
                />
              </div>
              <Slide
                direction="up"
                timeout={{ enter: 1000, exit: 1000 }}
                in={checked}
                mountOnEnter
                unmountOnExit
              >
                {this.renderNumOfNightsInfo()}
              </Slide>
              <br />
            </div>
            <div className="payment_details">
              <BookingDetails
                discount={this.state.selectedDiscount}
                label="Checkout"
                onButtonClick={this.submit}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(injectStripe(Payment));
