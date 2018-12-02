import React from "react";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Slider from "react-slick";
import { instance } from "../../Axios";
import store from "../../redux/store";
import { Link } from "react-router-dom";
const rewards = {};
const moon = require("../../img/coinBadge.png");

class RewardsPopper extends React.Component {
  state = {
    rewards: []
  };

  componentWillMount() {
    instance("/rewards?email=" + store.getState().user.email).then(res => {
      console.log("Popper:" + res.data.data.average);
      this.setState({ rewards: res.data.data.average });
    });
  }

  renderRewards = () => {
    let nights = this.state.rewards;
    let Table = [];
    nights.map((night, index) => {
      Table.push(
        <div>
          <center>
            <Link to="/rewards">
              <img
                src={moon}
                alt={"$" + night[index]}
                style={{ width: "50px" }}
              />
            </Link>
            <p>${night}</p>
          </center>
        </div>
      );
    });
    return Table;
  };

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 250,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: "dot"
    };
    return (
      <div style={{ margin: "auto", width: "100px", paddingTop: "10px" }}>
        <Slider {...settings}>{this.renderRewards()}</Slider>
      </div>
    );
  }
}

export default withRouter(RewardsPopper);
