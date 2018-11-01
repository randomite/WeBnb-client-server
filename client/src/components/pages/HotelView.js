import React from "react";
import Header from "../ui/Header";
import Gallery from "../ui/Gallery";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import RoomGrid from "../ui/RoomGrid";
import BookingDetails from "../ui/BookingDetails";
import instance from "../../Axios";

const hotel_data = require("./hotel_data");

export default class HotelView extends React.Component {
  constructor() {
    super();

    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    };

    //GET DATA FROM BACK END
  }

  combineRoomImages = () => {
    return hotel_data.rooms.reduce(function(accumulator, currentValue) {
      return accumulator.concat(currentValue.images);
    }, []);
  };

  render() {
    console.log("REDUCED ROOMS", this.combineRoomImages());
    return (
      <div>
        <Header />
        <div className="hotel">
          <div className="gallery">
            <Gallery
              hotelImages={hotel_data.images}
              roomImages={this.combineRoomImages()}
            />
          </div>
          <div className="hotel_details">
            <div className="details">
              <h1>{hotel_data.name}</h1>
              <h5>{hotel_data.address}</h5>
              <div>
                <h3>Available Rooms</h3>
                <div>
                  <RoomGrid rooms={hotel_data.rooms} />
                </div>
              </div>
            </div>
            <BookingDetails />
          </div>
        </div>
      </div>
    );
  }
}
