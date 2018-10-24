import React from "react";
import RoomCard from "./RoomCard";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";

class BookingDetails extends React.Component {
  render() {
    console.log("BOOKING:", this.props);
    return (
      <div className="booking">
        <div className="price">
          <h2>$40</h2>
          <h5>per night</h5>
        </div>
        <hr />
        <div>
          <RoomCard room={this.props.room} />
        </div>
        <div>
          <Button variant="contained">Book</Button>
        </div>
      </div>
    );
  }
}

export default connect(state => state.booking)(BookingDetails);
