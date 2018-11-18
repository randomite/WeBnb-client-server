import React from "react";
import Header from "../ui/Header";
import Gallery from "../ui/Gallery";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import RoomGrid from "../ui/RoomGrid";
import BookingDetails from "../ui/BookingDetails";
import instance from "../../Axios";
import {Grid} from '@material-ui/core'

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
  // Combine all the images from all the rooms into one large array
  combineRoomImages = () => {
    return hotel_data.rooms.reduce(function(accumulator, currentValue) {
      return accumulator.concat(currentValue.images);
    }, []);
  };

  render() {
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
          <Grid container className="hotel_details">
            <Grid item xs={12} sm={7}>
              <h1>{hotel_data.name}</h1>
              <h5>{hotel_data.address}</h5>
              <h6>{hotel_data.city} {hotel_data["postal code"]}</h6>
              <br/>
              <div>
                <h3>Available Rooms</h3>
                <div>
                  <RoomGrid rooms={hotel_data.rooms} />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
                <BookingDetails />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
