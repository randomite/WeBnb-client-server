import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Gallery from "../ui/Gallery";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import RoomGrid from "../ui/RoomGrid";
import BookingDetails from "../ui/BookingDetails";
import instance from "../../Axios";
import { Grid } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import HotelMap from "../ui/HotelMap";
import MapMarker from "../ui/MapMarker";
import store from "../../redux/store";
import moment from "moment";
import {withRouter} from 'react-router-dom';

const hotel_data = require("./hotel_data");

class HotelView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    };
    this.handleBooking = this.handleBooking.bind(this);
  
    this.getHotelData();
  }

  getHotelData = () => {};

  componentWillMount() {
    // If there is no search then set the dates to be now and tomorrow
    if (!(store.getState().search.endDate && store.getState().search.startDate))
      store.dispatch({
        type: "booking/SET_DATES",
        payload: {
          startDate: moment(),
          endDate: moment().add(1, "days")
        }
      });
    if (!store.getState().booking.guests.total)
      store.dispatch({
        type: "booking/SET_GUESTS",
        payload: {
          adults: 1,
          children: 0,
          total: 1
        }
      });
  }

  // Combine all the images from all the rooms into one large array
  combineRoomImages = () => {
    return hotel_data.rooms.reduce(function(accumulator, currentValue) {
      return accumulator.concat(currentValue.images);
    }, []);
  };

 handleBooking() {
    this.props.history.push('/payment');
  }


  render() {
    const hotelMarker = (
      <MapMarker
        key={hotel_data.id}
        price={hotel_data.rooms[0].price}
        lat={hotel_data.latitude}
        lng={hotel_data.longitude}
        id={hotel_data.id}
      />
    );
    return (
      <div>
        <Header />
        <div className="hotel">
          <div>
            <Gallery
              hotelImages={hotel_data.images}
              roomImages={this.combineRoomImages()}
            />
          </div>
          <Grid
            container
            className="hotel_details"
            spacing={8}
            justify="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={12} md={8}>
              <h1>{hotel_data.name}</h1>
              <h5>{hotel_data.address}</h5>
              <h6>
                {hotel_data.city} {hotel_data["postal code"]}
              </h6>
              <br />
              <div>
                <h3>Available Rooms</h3>
                <div>
                  <RoomGrid rooms={hotel_data.rooms} />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <BookingDetails label="Book" onButtonClick={this.handleBooking}/>
            </Grid>
            <Grid item xs={12} sm={12}>
              <h1>Location</h1>
              <div style={{ height: "50vh", width: "100%" }}>
                <GoogleMapReact
                  defaultCenter={{
                    lat: hotel_data.latitude,
                    lng: hotel_data.longitude
                  }}
                  defaultZoom={14}
                  // zoom={15}
                  bootstrapURLKeys={{
                    key: process.env.REACT_APP_MAPS_API_KEY,
                    language: "en"
                  }}
                >
                  {hotelMarker}
                </GoogleMapReact>
              </div>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(HotelView);
