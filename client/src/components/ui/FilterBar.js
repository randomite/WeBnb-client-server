import React from "react";
import "rheostat/initialize";
import Rheostat from "rheostat";
import { Grid, Button } from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

export default class FilterBar extends React.Component {
  state = { drawer: false };

  toggleDrawer = (drawer, open) => () => {
    this.setState({
      [drawer]: open
    });
  };

  render() {
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
                <Button size="small" variant="outlined">
                  Price
                </Button>
              </Grid>
            </Grid>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}
