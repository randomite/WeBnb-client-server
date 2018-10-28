import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import HotelMap from "../ui/HotelMap";
import HotelCard from "../ui/HotelCard";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Slide from "@material-ui/core/Slide";
import Grow from "@material-ui/core/Grow";
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
    checked: false
  };

  //Function to display/hide map
  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { checked } = this.state;
    return (
      <div>
        <Header />
        {/*Filter here*/}
        {/*This component is the switch to display or hide the map_switch*/}
        <div className="map_switch">
          {/*Form Control Label allows you to add text tot the Switch*/}
          <FormControlLabel
            control={<Switch checked={checked} onChange={this.handleChange} />}
            label="Display Map"
          />
        </div>
        {/*Displays # of searche results*/}
        <div>
          <h2>{Object.keys(search_data).length} Hotels</h2>
        </div>

        {/*Displays contents of the page */}
        <div className="page_content">
          <Slide
            direction="left"
            timeout={{ enter: 1000, exit: 1000 }}
            in={checked}
            mountOnEnter
            unmountOnExit
          >
            <div className="map-container">
              <HotelMap hotels={search_data} />
            </div>
          </Slide>
          {/*Displays search results with Hotel Cards*/}
          <div className="search_results">
            <Grow in={true} timeout={{ enter: 1000, exit: 1000 }}>
              <div className="hotels">{this.renderHotels()}</div>
            </Grow>
          </div>
          {/*Displays map of search results with slide effect*/}
        </div>

        <Footer />
      </div>
    );
  }
}
