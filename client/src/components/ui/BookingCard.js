import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import moment from 'moment'

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1000,
    padding: theme.spacing.unit * 2,
  },
  image: {
    width: 320,
    height: 150,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});
function ComplexGrid(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Grid container spacing={16}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={props.imageOfHotel} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                <b>{props.nameOfHotel}</b>
              </Typography>
              <Typography gutterBottom>{props.number >= 0 ? `${props.number} Days unitl check in` : `${Math.abs(props.number)} Days ago`} </Typography>

              <Typography color="textSecondary"> From: {moment(props.startDate).format("MMM DD YYYY")}</Typography>
              <Typography color="textSecondary">To: {moment(props.endDate).format("MMM DD YYYY")}</Typography>
            </Grid>

          </Grid>
          <Grid item>
            <Typography variant="subtitle2">${props.price}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ComplexGrid);
