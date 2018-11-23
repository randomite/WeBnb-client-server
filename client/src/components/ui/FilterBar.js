import "rheostat/initialize";
import React from "react";
import Rheostat from "rheostat";
import { Grid, Button } from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Popper from "@material-ui/core/Popper/Popper";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";

export default class FilterBar extends React.Component {
  state = {
    drawer: false,
    price: false
  };

  toggleDrawer = (drawer, open) => () => {
    this.setState({
      [drawer]: open,
      price: false
    });
  };

  handleOpen = () => {
    this.setState({ price: !this.state.price });
  };

  render() {
    const { popper } = this.state;
    const id = popper ? "simple-popper" : null;
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
                  id={id}
                  open={this.state.price}
                  placement="bottom-end"
                  anchorEl={document.getElementById("wherePrice")}
                  className="pricePopper"
                >
                  <Paper>The content of the Popper.</Paper>
                  <Rheostat min={1} max={100} values={[1, 100]} />
                </Popper>
              </Grid>
            </Grid>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}
