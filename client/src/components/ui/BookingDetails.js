import React from "react";
import RoomCard from "./RoomCard";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import {DateRangePicker} from "react-dates";
import moment from 'moment'

class BookingDetails extends React.Component {

  constructor(){
    super();

    this.state = {
      focusedInput: null

    }
  }

  handleDateChange=(startDate, endDate)=>{
    console.log("DATES CHANGE", startDate , endDate)
    this.props.dispatch({
      type: "booking/SET_DATES",
      payload: {
        startDate: startDate,
        endDate: endDate
      }
    })
  };

  render() {
    console.log("BOOKING:", this.props);

    const rate = (
      <div className="price">
        <h2>${this.props.room.price}</h2>
        <h5>per night</h5>
      </div>
    );

    const noRate = (
      <div className="price">
        <h2>No room selected</h2>
      </div>
    );

    return (
      <div className="booking">
        {this.props.room.id ? rate : noRate}
        <hr />
        <br/>
        <div style={{ width: "100%" }}>
          <RoomCard room={this.props.room} />
        </div>
        <br/>
        <DateRangePicker
          block
          numberOfMonths={1}
          startDatePlaceholderText="Check In"
          endDatePlaceholderText="Check Out"
          startDate={this.props.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.props.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            this.handleDateChange(startDate, endDate)
          } // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
        <br/>
        <div>GUEST PICKER HERE</div>
        <br/>
        <div className="price_breakdown">
          <div>
            ${this.props.room.price} x {moment(this.props.endDate).diff(this.props.startDate, 'days')} days
            <div >
              ${this.props.room.price * 2}
            </div>
          </div>
          <br/>
          <div>
            Service fee
            <div >
              $40
            </div>
          </div>
          <br/>
          <div>
            Total
            <div >
              ${this.props.room.price * 2 + 40}
            </div>
          </div>
        </div>
        <br/>
        <div>
          <Button variant="contained" className={"book_button"}>
            Book
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(state => state.booking)(BookingDetails);
