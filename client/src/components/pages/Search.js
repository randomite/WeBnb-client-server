import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import HotelMap from "../ui/HotelMap";
import HotelCard from "../ui/HotelCard";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Slide from "@material-ui/core/Slide";
import Grow from "@material-ui/core/Grow";
import Grid from "@material-ui/core/Grid/Grid";
import FilterBar from "../ui/FilterBar";
const search_data = require("./search_data");

export default class Search extends React.Component {
  renderHotels = () => {
    return search_data.map(hotel => (
      <HotelCard
        key={hotel.id}
        name={hotel.name}
        rooms={Object.keys(hotel.rooms).length}
        price={hotel.rooms[0].price}
        image={hotel.rooms[0].images[0].src}
        id={hotel.id}
      />
    ));
  };

  state = {
    checked: false,
    filteredData: { search_data }
  };

  //Function to display/hide map
  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { checked } = this.state;

    const map = (
      <Grid item sm={checked ? 4 : 0}>
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
        {/*Displays map of search results with slide effect*/}
      </Grid>
    );
    return (
      <div>
        <Header />
        {/*This component lets you filter through results*/}
        <FilterBar />
        <div style={{ maxWidth: "1080px", marginLeft: "5px" }}>
          {/*This component is the switch to display or hide the map_switch*/}
          <div className="map_switch">
            {/*Form Control Label allows you to add text tot the Switch*/}
            <FormControlLabel
              control={
                <Switch checked={checked} onChange={this.handleChange} />
              }
              label="Display Map"
            />
          </div>
          {/*Displays # of searche results*/}
          <div>
            <h2>{Object.keys(search_data).length} Hotels</h2>
          </div>
        </div>
        {/*Displays contents of the page */}
        <div className="page_content">
          {/*Displays search results with Hotel Cards*/}
          <Grid
            container
            direction={window.innerWidth < 600 ? "column-reverse" : "row"}
          >
            <Grid item xs={12} sm={checked ? 8 : 12}>
              <div className="search_results">
                <Grow in={true} timeout={{ enter: 1000, exit: 1000 }}>
                  <Grid container className="hotels" spacing={8}>
                    {this.renderHotels()}
                  </Grid>
                </Grow>
              </div>
            </Grid>
            {map}
          </Grid>
        </div>

        <Footer />
      </div>
    );
  }
}
