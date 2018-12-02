import React from "react";
import { withRouter } from "react-router-dom";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import PastBookings from "../ui/PastBookings";

class Bookings extends React.Component {
  render() {
    return(
      <div className="bookings" >
        <Header />
          <div className="bookings_content">
            <h1>My Bookings</h1>

            <PastBookings />
          </div>
        <Footer />
      </div>
    );
  }
}
export default withRouter(Bookings);
