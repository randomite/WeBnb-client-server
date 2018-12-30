import React from "react";
import { withRouter } from "react-router-dom";
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

  handleClick = discount => {
    this.returnDiscount(discount);
  };

  renderRewards = () => {
    let averages = this.state.freeNight;
    let link = this.props.link;
    let Table = [];
    averages.map((average, index) => {
      if (average !== 0) {
        let response = [average, index];
        if (link) {
          Table.push(
            <div>
              <center style={{ width: "150px" }}>
                <Link to="/rewards">
                  <img src={moon} style={{ width: "50px", margin: 0 }} />
                </Link>
                <p style={{ width: "50%", margin: "auto", padding: 0 }}>
                  ${average}
                </p>
              </center>
            </div>
          );
        } else {
          Table.push(
            <div className="badgeContainer">
              <img
                src={moon}
                className="discountBadge"
                onClick={e => this.handleClick(response)}
              />
              <p style={{ textAlign: "center" }}>${average}</p>
            </div>
          );
        }
      }
    });
    return Table;
  };

  returnDiscount = discount => {
    this.props.callBackFromParent(discount);
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
      <div style={{ margin: "auto", width: "150px", userSelect: "none" }}>
        <Slider {...settings}>{this.renderRewards()}</Slider>
      </div>
    );
  }
}

export default withRouter(RewardsPopper);
