import React from "react";
import { withRouter } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import MapMarker from "../ui/MapMarker";
import {connect} from 'react-redux';

class HotelMap extends React.Component {
  renderHotelMarkers = () => {
    return this.props.hotels.map(hotel => (
      <MapMarker
        key={hotel.id}
        price={hotel.rooms[0].price}
        lat={hotel.latitude}
        lng={hotel.longitude}
        id={hotel.id}
      />
    ));
  };

  static defaultProps = {
    zoom: 5
  };

  render() {
    return (
      <div className="google-map">
        <GoogleMapReact
          defaultCenter={{ lat: this.props.latitude, lng: this.props.longitude}}
          defaultZoom={this.props.zoom}
          // zoom={15}
          bootstrapURLKeys={{
            key: "AIzaSyBTL4nCbx4tgui_HLQZMK-t2Olm8cRHZIw",
            language: "en"
          }}
        >
          {this.renderHotelMarkers()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default connect(state => state.search)(withRouter(HotelMap));
