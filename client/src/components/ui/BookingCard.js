import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
});

const BookingCard = (props) => {
  return(
    <div className="card-container">

      <div className="description">
        <p>{props.startDate}</p>
        <p>{props.endDate}</p>
      </div>
    </div>
  )
}
//export default BookingCard;

function MediaControlCard(props) {
  const { classes, theme } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            <p>{props.nameOfHotel}</p>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <p>{props.startDate}</p>
            <p>{props.endDate}</p>
          </Typography>

        </CardContent>

      </div>
      <CardMedia
        className={classes.cover}
        image={props.imageOfHotel}
        title="Live from space album cover"
      />
    </Card>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
