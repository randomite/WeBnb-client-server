import React from "react";
import { Grid, Button } from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Popper from "@material-ui/core/Popper/Popper";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

export default class FilterBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drawer: false,
      price: false,
      values: [0, 100]
    };

    this.updateValue = this.updateValue.bind(this);
  }

  toggleDrawer = (drawer, open) => () => {
    this.setState({
      [drawer]: open,
      price: false
    });
  };

  handleOpen = () => {
    this.setState({ price: !this.state.price });
  };

  //Drawes the lines about slider
  PitComponent = ({ style, children }) => {
    return (
      <div
        style={{
          ...style,
          background: "#a2a2a2",
          width: "5px",
          height: children % 20 === 0 ? 12 : 8,
          top: -20
        }}
      />
    );
  };

  //updates the value for price
  updateValue(sliderState) {
    this.setState({
      values: sliderState.values
    });
  }

  render() {
    const { popper, values } = this.state;

    this.PitComponent.propTypes = {
      style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
      children: PropTypes.number
    };
    this.PitComponent.defaultProps = {
      style: null,
      children: null
    };

    return (
      <div style={{ width: "100%", height: "46px", paddingTop: "10px" }}>
        <Grid
          container
          spacing={8}
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item>
            <Button size="small" variant="outlined">
              Dates
            </Button>
          </Grid>
          <Grid item>
            <Button size="small" variant="outlined">
              Guests
            </Button>
          </Grid>
          <Grid item>
            <Button
              size="small"
              variant="outlined"
              onClick={this.toggleDrawer("drawer", !this.state.drawer)}
            >
              Filters
            </Button>
          </Grid>
        </Grid>

        {/*Swipeable Footer Drawer*/}
        <SwipeableDrawer
          anchor="top"
          open={this.state.drawer}
          onClose={this.toggleDrawer("drawer", false)}
          onOpen={this.toggleDrawer("drawer", true)}
        >
          <div className="drawerContent">
            <Grid
              container
              spacing={8}
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={this.handleOpen}
                  id="wherePrice"
                >
                  Price
                </Button>
                <Popper
                  open={this.state.price}
                  placement="bottom-start"
                  anchorEl={document.getElementById("wherePrice")}
                  className="pricePopper"
                >
                  {/*pitpoints are the intervals where lines are drawn*/}
                  <Paper className="sliderContainer">
                    {/*displays values under slider*/}
                    {values.map((value, index) => {
                      if (index === 0) {
                        return <div style={{ float: "left" }}>{value}</div>;
                      } else {
                        return <div style={{ float: "right" }}>{value}</div>;
                      }
                    })}
                  </Paper>
                </Popper>
              </Grid>
            </Grid>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}
