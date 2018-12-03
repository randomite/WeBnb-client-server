import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Gallery from "../ui/Gallery";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import RoomGrid from "../ui/RoomGrid";
import BookingDetails from "../ui/BookingDetails";

import { instance } from "../../Axios";
import { Grid } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import HotelMap from "../ui/HotelMap";
import MapMarker from "../ui/MapMarker";
import store from "../../redux/store";
import moment from "moment";
import { connect } from "react-redux";
import { getHotelData } from "../../redux/actions";

window.onbeforeunload = closingCode;
function closingCode() {
  store.dispatch({ type: "search/CLEAR_HOTEL_DATA" });
  store.dispatch({ type: "search/CLEAR_ROOM_DATA" });
}

class HotelView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null
    };

    this.handleBooking = this.handleBooking.bind(this);
  }

  getQuery() {
    const querryParams = new URLSearchParams(
      this.props.location.search.toString()
    );
    let hotel_id = querryParams.get("id");
    this.props.dispatch(getHotelData(hotel_id));
  }

  componentWillMount() {
    this.getQuery();

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
    return this.props.hotelData.rooms.reduce(function(
      accumulator,
      currentValue
    ) {
      console.log("Current Value", currentValue);
      return accumulator.concat(currentValue.images);
    },
    []);
  };

  handleBooking() {
    this.props.history.push("/payment");
  }

  render() {
    const hotel_data = this.props.hotelData;

    return (
      <div>
        <Header />
        <div className="hotel">
          {this.props.hotelData ? (
            <div>
              <div>
                <Gallery
                  hotelImages={this.props.hotelData.images.map(image => {
                    return { src: image.M.src.S };
                  })}
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
                      {this.props.roomData ? (
                        <RoomGrid rooms={this.props.roomData} />
                      ) : null}
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <BookingDetails
                    label="Book"
                    onButtonClick={this.handleBooking}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <h1>Location</h1>
                  <div style={{ height: "50vh", width: "100%" }}>
                    <GoogleMapReact
                      center={{
                        lat: Number(this.props.hotelData.latitude),
                        lng: Number(this.props.hotelData.longitude)
                      }}
                      defaultZoom={16}
                      // zoom={15}
                      bootstrapURLKeys={{
                        key: process.env.REACT_APP_MAPS_API_KEY,
                        language: "en"
                      }}
                    >
                      <MapMarker
                        key={this.props.hotelData.id}
                        price={99}
                        lat={this.props.hotelData.latitude}
                        lng={this.props.hotelData.longitude}
                        id={this.props.hotelData.id}
                      />
                    </GoogleMapReact>
                  </div>
                </Grid>
              </Grid>
            </div>
          ) : (
            <div>LOADING</div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(state => state.search)(HotelView);
