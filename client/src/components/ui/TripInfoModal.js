import React from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { connect } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  TextField,
  InputLabel,
  InputAdornment,
  IconButton,
  DialogActions,
  Button,
  CircularProgress
} from "@material-ui/core";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
import validator from "validator";
import { instance } from "../../Axios";
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';



export default class TripInfoModal extends React.Component {
  state = {
    destination: "",
    destinationError: "",
    start: "",
    startError: "",
    end: "",
    endError: "",
    numberofpeople: "",
    numberofpeopleError: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      destinationError: "",
      startError: "",
      endError: "",
      numberofpeopleError: ""
    };
    if (!this.state.destination) {
      isError = true;
      errors.destinationError = "Can't be empty";
    }

    this.setState({
      ...this.state,
      ...errors
    });
    return isError;
  };
  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.setState({
        destination: "",
        destinationError: "",
        start: "",
        startError: "",
        end: "",
        endError: "",
        numberofpeople: "",
        numberofpeopleError: ""
      });
      this.props.onChange({
        destination: "",
        start: "",
        end: "",
        numberofpeople: ""
      });
    }
  };

  render() {
    return (
      <form>
        <p>Bookings catered for you</p>
        <TextField
          name="destination"
          variant="outlined"
          fullWidth
          label="Where To"
          placeholder="Anywhere"
          margin="normal"
          required
          errrorText={this.state.destinationError}
          value={this.state.destination}
          onChange={e => this.change(e)}
          InputLabelProps={{
            shrink: true
          }}
        />
        <br />
        {/*<TextField*/}
          {/*name="start"*/}
          {/*variant="outlined"*/}
          {/*fullWidth*/}
          {/*label="CHECK IN"*/}
          {/*placeholder="mm/dd/yyyy"*/}
          {/*margin="normal"*/}
          {/*required*/}
          {/*errrorText={this.state.startError}*/}
          {/*value={this.state.start}*/}
          {/*onChange={e => this.change(e)}*/}
          {/*InputLabelProps={{*/}
            {/*shrink: true*/}
          {/*}}*/}
        {/*/>*/}
        {/*<TextField*/}
          {/*name="end"*/}
          {/*variant="outlined"*/}
          {/*fullWidth*/}
          {/*label="CHECK OUT"*/}
          {/*placeholder="mm/dd/yyyy"*/}
          {/*margin="normal"*/}
          {/*required*/}
          {/*value={this.state.end}*/}
          {/*onChange={e => this.change(e)}*/}
          {/*InputLabelProps={{*/}
            {/*shrink: true*/}
          {/*}}*/}
        {/*/>*/}

        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />

        <br />
        <TextField
          name="numberofpeople"
          variant="outlined"
          fullWidth
          label="GUESTS"
          placeholder="1 guest"
          margin="normal"
          required
          value={this.state.numberofpeople}
          onChange={e => this.change(e)}
          InputLabelProps={{
            shrink: true
          }}
        />
        <br />
        <Button
          variant="contained"
          color="secondary"
          onClick={e => this.onSubmit(e)}
        >
          Search
        </Button>
      </form>
    );
  }
}
