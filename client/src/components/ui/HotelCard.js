import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import imgurl from "../../img/TestImage.jpg";

const styles = {
  card: {
    maxWidth: 300
  },
  media: {
    height: 250,
    width: 300
  },
  text: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "white",
    padding: 10
  }
};

function HotelCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imgurl}>
          <CardContent className={classes.text}>
            <Typography component="p" id="numberOfRooms" color="inherit">
              Hotel 5 rooms available
            </Typography>
            <Typography variant="h6" component="h2" id="name" color="inherit">
              The Venetian Las Vegas
            </Typography>
            <Typography component="p" id="price" color="inherit">
              $ 408 per night
            </Typography>
            <Typography component="p" id="rating" color="inherit">
              133 reviews
            </Typography>
          </CardContent>
        </CardMedia>
      </CardActionArea>
    </Card>
  );
}

HotelCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HotelCard);
