import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import moment from 'moment'
import {instance} from "../../Axios";
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import {DateRangePicker} from "react-dates";
import store from '../../redux/store'

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
class BookingCard extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      imageOfHotel: '',
      nameOfHotel: '',
      open: false,
      startDate: moment(this.props.startDate),
      endDate: moment(this.props.endDate),
      focusedInput: ''
    }

  }




  handleDateChange=(startDate, endDate)=>{
    console.log("DATES CHANGE", startDate , endDate)
    this.setState({
      startDate: startDate,
      endDate: endDate,
      dayPrice: 0,
    })
  };

  componentWillMount(){
    // get hotel data
        instance.get('hotel',{
          params: {id: this.props.hotel_id}
        }).then(response=>{
          if(response.status === 200){
            this.setState({imageOfHotel: response.data.data.images[0].M.src.S, nameOfHotel: response.data.data.name})
          }
        })

        instance.get('room', {
          params: {id: this.props.room_id, hotel_id: this.props.hotel_id }
        }).then(response=>{
          if(response.status === 200){
            console.log('ROOMMM',response.data.data.price)
            this.setState({dayPrice: response.data.data.price})
          }
        })
  }

  handleEdit=()=>{
    var form = new FormData();
    form.append("user_id", store.getState().user.email);
    form.append("hotel_id", this.props.hotel_id);
    form.append("room_id", this.props.room_id);
    form.append("date_checkin", this.state.startDate.format('YYYY-MM-DDD'));
    form.append("date_checkout", this.state.endDate.format('YYYY-MM-DDD'));

    let data = {user_id: store.getState().user.email,
      hotel_id: this.props.hotel_id,
      room_id: this.props.room_id,
      date_checkin: this.state.startDate.format('YYYY-MM-DD'),
      date_checkout: this.state.endDate.format('YYYY-MM-DD'),
      total_price: this.state.dayPrice * this.state.endDate.diff(this.state.startDate, 'days') + 40
    }

    console.log('New Price', this.state.dayPrice * this.state.endDate.diff(this.state.startDate, 'days'))
    instance.put('/booking/?booking_id=' + this.props.id, {
      ...data,
      headers: {"Content-Type": "multipart/form-data", "cache-control": "no-cache",
        "Postman-Token": "8bf5c341-bad1-4592-ab87-1d9b818f1f0f"}
    },).then(response=>{
      this.handleClose()
      window.location.reload();
      console.log('Edit Booking',response)});
  }

  handleCancelBooking=()=>{
    instance.delete(`booking/?booking_id=${this.props.id}&user_id=${store.getState().user.email}`).then(response=>{
      console.log(response)
      this.handleClose()
      window.location.reload();
    })
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render(){
    const { classes } = this.props;

    const props = this.props
    return (
      <Paper className={classes.root} style={{marginBottom: '10px'}}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={this.state.imageOfHotel} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <b>{this.state.nameOfHotel}</b>
                </Typography>
                <Typography gutterBottom>{props.number >= 0 ? `${props.number} Days unitl check in` : `${Math.abs(props.number)} Days ago`} </Typography>

                <Typography color="textSecondary"> From: {moment(props.startDate).format("MMM DD YYYY")}</Typography>
                <Typography color="textSecondary">To: {moment(props.endDate).format("MMM DD YYYY")}</Typography>
              </Grid>

            </Grid>
            <Grid item>
              <Typography variant="subtitle2">${props.price}</Typography>
              {props.number >0 ? <Button variant='outlined' onClick={this.handleClickOpen}>Edit</Button> : null}
            </Grid>
          </Grid>
        </Grid>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Booking</DialogTitle>
          <DialogContent style={{height: '500px'}}>
            <DialogContentText>
              To edit your booking select the new preferred dates.
            </DialogContentText>
            <DateRangePicker
              block
              autoFocus
              numberOfMonths={1}
              startDatePlaceholderText="Check In"
              endDatePlaceholderText="Check Out"
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) =>
                this.handleDateChange(startDate, endDate)
              } // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />
            <Button variant='outlined' style={{marginTop: '25px'}} onClick={this.handleCancelBooking}>Cancel Booking</Button>
            <div>New Price {this.state.dayPrice * this.state.endDate.diff(this.state.startDate, 'days')}</div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant='contained' onClick={this.handleEdit}>
              Edit
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    );
  }
}

BookingCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(BookingCard);
