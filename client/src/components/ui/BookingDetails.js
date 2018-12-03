import React from "react";
import RoomCard from "./RoomCard";
import { Button, FormControl } from "@material-ui/core";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import Counters from "./searchBar/Counters";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import Popover from "@material-ui/core/Popover/Popover";
import { withRouter } from "react-router-dom";

class BookingDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      focusedInput: null,
      guestsPopover: false,
      applyDiscount: false
    };
  }

  handleGuestPopoverOpen = () => {
    this.setState({ guestsPopover: true });
  };

  handleDateChange = (startDate, endDate) => {
    console.log("DATES CHANGE", startDate, endDate);
    this.props.dispatch({
      type: "booking/SET_DATES",
      payload: {
        startDate: startDate,
        endDate: endDate
      }
    });
  };

  calculateDiscount = () => {
    let diff =
      this.props.room.price *
        moment(this.props.endDate).diff(this.props.startDate, "days") +
      40 -
      this.props.discount;

    if (diff < 0) {
      return 0;
    } else {
      return diff;
    }
  };

  checkDiscount = () => {
    if (this.props.room.id) {
      console.log("Room Selected");

      if (this.props.discount) {
        console.log("Incoming Discount:" + this.props.discount);
        return (
          <div className="price_breakdown">
            <div>
              ${this.props.room.price} x{" "}
              {moment(this.props.endDate).diff(this.props.startDate, "days")}{" "}
              days
              <div>
                $
                {this.props.room.price *
                  moment(this.props.endDate).diff(this.props.startDate, "days")}
              </div>
            </div>
            <br />
            <div>
              Service fee
              <div>$40</div>
            </div>
            <br />
            <div>
              Discount
              <div>
                <h1 className="discount">-${this.props.discount}</h1>
              </div>
            </div>
            <br />
            <div>
              Total
              <div>
                <h1 className="discount">${this.calculateDiscount()}</h1>
                <div className="discountedPrice">
                  $
                  {this.props.room.price *
                    moment(this.props.endDate).diff(
                      this.props.startDate,
                      "days"
                    ) +
                    40}
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        console.log("No Discount");
        return (
          <div className="price_breakdown">
            <div>
              ${this.props.room.price} x{" "}
              {moment(this.props.endDate).diff(this.props.startDate, "days")}{" "}
              days
              <div>
                $
                {this.props.room.price *
                  moment(this.props.endDate).diff(this.props.startDate, "days")}
              </div>
            </div>
            <br />
            <div>
              Service fee
              <div>$40</div>
            </div>
            <br />
            <div>
              Total
              <div>
                $
                {this.props.room.price *
                  moment(this.props.endDate).diff(
                    this.props.startDate,
                    "days"
                  ) +
                  40}
              </div>
            </div>
          </div>
        );
      }
    } else {
      console.log("Room not Selected");
      return null;
    }
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
        <br />
        <div style={{ width: "100%" }}>
          <RoomCard room={this.props.room} />
        </div>
        <br />
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
        <br />
        <FormControl
          id="guest_button"
          variant="outlined"
          fullWidth
          onClick={this.handleGuestPopoverOpen}
        >
          <OutlinedInput
            labelWidth={0}
            value={`${this.props.guests.total} Guests`}
          />
        </FormControl>
        <Popover
          anchorEl={document.getElementById("guest_button")}
          open={this.state.guestsPopover}
          onClose={() => this.setState({ guestsPopover: false })}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <Counters />
        </Popover>
        <br />
        <br />
        {this.checkDiscount()}
        <br />
        <div>
          <Button
            variant="contained"
            className={"book_button"}
            disabled={!this.props.room.id}
            onClick={() => this.props.onButtonClick()}
          >
            {this.props.label}
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(state => state.booking)(withRouter(BookingDetails));
