import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import HotelCard from "../ui/HotelCard";
const search_data = require("./search_data");

export default class Search extends React.Component {
  renderHotels = () => {
    return search_data.map(hotel => (
      <HotelCard
        name={hotel.name}
        rooms={Object.keys(hotel.rooms).length}
        price={hotel.rooms[0].room_type_code.rate}
        image={hotel.rooms[0].image_url[0]}
        id={hotel.id}
      />
    ));
  };
  render() {
    return (
      <div>
        <Header />
        {/*Filter here*/}

        <div className="search_results">
          <div>
            {/*Displays # of searche results*/}
            <h2>{Object.keys(search_data).length} Hotels</h2>
          </div>
          <div className="hotels">{this.renderHotels()}</div>
        </div>
        <Footer />
      </div>
    );
  }
}
