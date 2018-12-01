import React from "react";
import { connect } from "react-redux";
import {
  FormControl,
  TextField,
  Button,
  CircularProgress
} from "@material-ui/core";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import validator from "validator";
import { instance } from "../../Axios";
import  {
  DateRangePicker,
} from "react-dates";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import Popover from "@material-ui/core/Popover/Popover";
import Counters from "./searchBar/Counters";
import {withRouter} from "react-router-dom";
import Popper from "@material-ui/core/Popper/Popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener";
import {search} from "../../redux/actions";
import {geo2zip} from 'geo2zip'

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
      .then(results => {
        console.log('results', results)
        return getLatLng(results[0])}
      )
      .then(latLng => {
        geo2zip({
          latitude: latLng.lat,
          longitude: latLng.lng
        }).then(zip=>        this.props.dispatch({
          type: "search/SET_LOCATION",
          payload: {
            latitude: latLng.lat,
            longitude: latLng.lng,
            address: address,
            zipcode: zip
          }
        }))
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

  handleDateChange=(startDate, endDate)=>{
    this.props.dispatch({
      type: "search/SET_DATES",
      payload: {
        startDate: startDate,
        endDate: endDate
      }
    })
  };

  validate = () => {
    let isError = false;
    const errors = {
      destinationError: "",
      startError: "",
      endError: "",
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
      });
    }

    this.props.dispatch(search(
      this.props.startDate.format("YYYY-DD-MM"),
      this.props.endDate.format("YYYY-DD-MM"),
      this.props.guests.total,
      this.props.zipcode
    )).then(()=>this.props.history.push('/search'))

  };

  render() {
    console.log("TRIP MODAL PROPS", this.props);

    const guestsDropDown = (
      <FormControl
        id="guestDropDownButton"
        variant="outlined"
        fullWidth
        onClick={this.handleGuestPopoverOpen}
      >
        <OutlinedInput
          labelWidth={0}
          value={`${this.props.guests.total} Guests`}
        >

        </OutlinedInput>
      </FormControl>
    );
    return (
      <form onSubmit={(e)=>{this.onSubmit(e)}}>
        <p>Bookings catered for you</p>
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
              <div style={{fontWeight: '600', fontSize: '12px', marginBottom: '10px'}}>WHERE</div>
              <TextField
                {...getInputProps({ className: "location-search-input" })}
                variant="outlined"
                required
                fullWidth
                placeholder="Anywhere"
                id="suggestionsid"
              />
              <Popper
                open={suggestions.length > 0}
                placement='bottom-start'
                style={{zIndex: 1500, marginLeft: '-8px'}}
                // open={true}
                anchorEl={document.getElementById('suggestionsid')}
              >
                <div className="autocomplete-dropdown-container location_autofill" >
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
              </Popper>
            </div>
          )}
        </PlacesAutocomplete>
        <br />
        <div style={{fontWeight: '600', fontSize: '12px', marginBottom: '10px'}}>WHEN</div>
        <DateRangePicker
          required
          block
          numberOfMonths={window.innerWidth < 960 ? 1 : 2}
          startDatePlaceholderText="Check In"
          endDatePlaceholderText='Check Out'
        startDate={this.props.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.props.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            this.handleDateChange(startDate, endDate)
          } // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />

        <br />
        <div style={{fontWeight: '600', fontSize: '12px', marginBottom: '10px'}}>WHO</div>
        {guestsDropDown}
        <Popper
          anchorEl={document.getElementById("guestDropDownButton")}
          open={this.state.guestsPopover}
          onClose={() =>{ console.log('closed')}}
        >
            <ClickAwayListener
                onClickAway={() => {
                    this.setState({ guestsPopover: false })}}>
                <Counters />
            </ClickAwayListener>
        </Popper>
        <br/>
        <br/>

        <Button
          variant="contained"
          fullWidth
          size='large'
          color="secondary"
          type='submit'
        >
          Search
        </Button>
      </form>
    );
  }
}

export default connect(state => state.search)(withRouter(TripInfoModal));
