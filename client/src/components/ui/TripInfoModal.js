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
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Select from "@material-ui/core/Select/Select";
import Popover from "@material-ui/core/Popover/Popover";
import Counters from "./searchBar/Counters";

class TripInfoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      guestsPopover: false,
      destination: "",
      destinationError: "",
      start: "",
      startError: "",
      end: "",
      endError: "",
      numberofpeople: "",
      numberofpeopleError: ""
    };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleGuestPopoverOpen = () => {
    this.setState({ guestsPopover: true });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log("Success", latLng);
        this.props.dispatch({
          type: "search/SET_LOCATION",
          payload: {
            latitude: latLng.lat,
            longitude: latLng.lng,
            address: address,
          }
        });
      })
      .catch(error => console.error("Error", error));
    this.setState({ address: address });
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
    console.log("TRIP MODAL PROPS", this.props);

    const guestsDropDown = (
      <Button
        id="guestDropDownButton"
        variant="outlined"
        fullWidth
        onClick={this.handleGuestPopoverOpen}
      >
        1 Guest
      </Button>
    );
    return (
      <form>
        <p>Bookings catered for you</p>
        {/*<TextField*/}
        {/*name="destination"*/}
        {/*variant="outlined"*/}
        {/*fullWidth*/}
        {/*label="Where To"*/}
        {/*placeholder="Anywhere"*/}
        {/*margin="normal"*/}
        {/*required*/}
        {/*errrorText={this.state.destinationError}*/}
        {/*value={this.state.destination}*/}
        {/*onChange={e => this.change(e)}*/}
        {/*InputLabelProps={{*/}
        {/*shrink: true*/}
        {/*}}*/}
        {/*/>*/}
        <PlacesAutocomplete
          highlightFirstSuggestion
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Where?",
                  className: "location-search-input"
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
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
          startDate={this.props.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.props.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          } // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />

        <br />
        {/*<TextField*/}
        {/*select*/}
        {/*name="numberofpeople"*/}
        {/*variant="outlined"*/}
        {/*fullWidth*/}
        {/*label="GUESTS"*/}
        {/*margin="normal"*/}
        {/*required*/}
        {/*value={2}*/}
        {/*onChange={e => this.change(e)}*/}
        {/*InputLabelProps={{*/}
        {/*shrink: true*/}
        {/*}}*/}
        {/*/>*/}
        <br />
        {guestsDropDown}
        <Popover
          anchorEl={document.getElementById("guestDropDownButton")}
          open={this.state.guestsPopover}
          onClose={() => this.setState({ guestsPopover: false })}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <Counters />
        </Popover>
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

export default connect(state => state.search)(TripInfoModal);
