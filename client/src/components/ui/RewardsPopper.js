import React from "react";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Slider from "react-slick";
import { instance } from "../../Axios";
import store from "../../redux/store";
import { Link } from "react-router-dom";
const moon = require("../../img/coinBadge.png");

class RewardsPopper extends React.Component {
  state = {
    freeNight: []
  };

  componentWillMount() {
    instance("/rewards?email=" + store.getState().user.email).then(res => {
      console.log("Popper:" + res.data.data.average);
      this.setState({ freeNight: res.data.data.average });
    });
  }

  renderRewards = () => {
    let nights = this.state.freeNight;
    let Table = [];
    nights.map((night, index) => {
      if (night != 0) {
        Table.push(
          <div>
            <center style={{ width: "150px" }}>
              <Link to="/freeNight">
                <img
                  src={moon}
                  alt={"$" + night[index]}
                  style={{ width: "50px", margin: 0 }}
                />
              </Link>
              <p style={{ width: "50%", margin: "auto", padding: 0 }}>
                ${night}
              </p>
            </center>
          </div>
        );
      }
    });
    return Table;
  };

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 250,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div style={{ margin: "auto", width: "150px", paddingTop: "10px" }}>
        <Slider {...settings}>{this.renderRewards()}</Slider>
      </div>
    );
  }
}

export default withRouter(RewardsPopper);
