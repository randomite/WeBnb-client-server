import React from "react";
import { withRouter } from "react-router-dom";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class HotelMap extends React.Component {
  static defaultProps = {
    center: { lat: 40.744679, lng: -73.948542 },
    zoom: 11
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
        />
      </div>
    );
  }
}

export default withRouter(HotelMap);
