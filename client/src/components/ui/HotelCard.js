import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

const styles = {
  card: {
    maxWidth: 300
  },
  media: {
    height: 250,
    width: 300
  },
  text: {
    width: 300,
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "white",
    padding: "5px 0px 0px 5px"
  }
};

class HotelCard extends React.Component {
  handleNavigate = () => {
    console.log("navigate");
    this.props.history.push(this.props.link);
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea onClick={this.handleNavigate}>
          <CardMedia className={classes.media} image={this.props.image}>
            <CardContent className={classes.text}>
              <Typography component="p" id="numberOfRooms" color="inherit">
                Hotel • {this.props.rooms} rooms available
              </Typography>
              <Typography variant="h1" component="h3" id="name" color="inherit">
                {this.props.name}
              </Typography>
              <Typography component="p" id="price" color="inherit">
                ${this.props.price} per night
              </Typography>
              <Typography component="p" id="rating" color="inherit">
                {this.props.reviews} reviews
              </Typography>
            </CardContent>
          </CardMedia>
        </CardActionArea>
      </Card>
    );
  }
}

HotelCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(HotelCard));
