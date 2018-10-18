import React from "react";
import { withRouter } from "react-router-dom";

import HotelCard from "../ui/HotelCard";

class Test extends React.Component {
  render() {
    return (
      <div>
        <HotelCard> Test</HotelCard>
      </div>
    );
  }
}

export default withRouter(Test);
