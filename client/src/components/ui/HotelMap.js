import React from "react";
import { withRouter } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import MapMarker from "../ui/MapMarker";

class HotelMap extends React.Component {
  renderHotelMarkers = () => {
    return this.props.hotels.map(hotel => (
      <MapMarker
        key={hotel.id}
        price={hotel.rooms[0].room_type_code.rate}
        lat={hotel.lat}
        lng={hotel.lng}
        id={hotel.id}
      />
    ));
  };

  static defaultProps = {
    center: { lat: 40.744679, lng: -73.948542 },
    zoom: 5
  };

  render() {
    return (
      <div className="google-map">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
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

export default withRouter(HotelMap);
