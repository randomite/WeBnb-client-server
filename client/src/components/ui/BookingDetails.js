import React from "react";
import RoomCard from "./RoomCard";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";

class BookingDetails extends React.Component {
  render() {
    console.log("BOOKING:", this.props);

    const rate = (
      <div className="price">
        <h2>${this.props.room.room_type_code.rate}</h2>
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
        <div style={{ width: "100%" }}>
          <RoomCard room={this.props.room} />
        </div>
        <div>DATE PICKER HERE</div>
        <div>GUEST PICKER HERE</div>
        <div className="price_breakdown">
          <div>
            ${this.props.room.room_type_code.rate} x 2 days
            <div >
              ${this.props.room.room_type_code.rate * 2}
            </div>
          </div>
          <div>
            Service fee
            <div >
              $40
            </div>
          </div>
          <div>
            Total
            <div >
              ${this.props.room.room_type_code.rate * 2 + 40}
            </div>
          </div>
        </div>
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
