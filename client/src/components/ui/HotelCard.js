import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import imgurl from "../../img/TestImage.jpg";

const styles = {
  card: {
    maxWidth: 345,
    height: 300,
    backgroundImage: `url( ${imgurl} )`
  }
};

const backgroundStyle = {};

function HotelCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography component="p">Number of rooms available</Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Hotel Name
          </Typography>
          <Typography component="p">Price</Typography>
          <Button size="small">Ratings</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

HotelCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HotelCard);
