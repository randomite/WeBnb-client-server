import React from "react";
import { withRouter } from "react-router-dom";

import HotelCard from "../ui/HotelCard";
import imgurl from "../../img/TestImage.jpg";

class Test extends React.Component {
  render() {
    return (
      <div>
        <HotelCard
          name={"Yo"}
          rooms={6}
          price={200}
          review={111}
          image={imgurl}
          link={"/terms"}
        />
      </div>
    );
  }
}

export default withRouter(Test);
