import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import HotelMap from "../ui/HotelMap";
import HotelCard from "../ui/HotelCard";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Slide from "@material-ui/core/Slide";
const search_data = require("./search_data");

export default class Search extends React.Component {
  renderHotels = () => {
    return search_data.map(hotel => (
      <HotelCard
        key={hotel.id}
        name={hotel.name}
        rooms={Object.keys(hotel.rooms).length}
        price={hotel.rooms[0].room_type_code.rate}
        image={hotel.rooms[0].image_url[0]}
        id={hotel.id}
      />
    ));
  };

  state = {
    displayMap: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { displayMap } = this.state;
    return (
      <div>
        <Header />
        {/*Filter here*/}
        <div className="map_switch">
          <FormControlLabel
            control={
              <Switch
                checked={this.state.displayMap}
                onChange={this.handleChange("displayMap")}
                value="displayMap"
              />
            }
            label="Display Map"
          />
        </div>
        <div>
          {/*Displays # of searche results*/}
          <h2>{Object.keys(search_data).length} Hotels</h2>
        </div>
        <div className="page_content">
          {/*Displays search results*/}
          <div className="search_results">
            <div className="hotels">{this.renderHotels()}</div>
          </div>
          {/*Displays map of search results*/}
          <Slide
            direction="left"
            in={displayMap}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 1000, exit: 1000 }}
          >
            <div className="map">
              {this.state.displayMap ? <HotelMap /> : null}
            </div>
          </Slide>
        </div>

        <Footer />
      </div>
    );
  }
}
