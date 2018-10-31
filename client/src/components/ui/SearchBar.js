import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { FormControl, TextField } from "@material-ui/core";
import PlacesAutocomplete from "react-places-autocomplete";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import Counters from "./searchBar/Counters";
import Popover from "@material-ui/core/Popover/Popover";
import Input from "@material-ui/core/Input/Input";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestsPopover: false
    };
  }

  handleChange = address => {
    this.props.dispatch({
      type: "search/SET_ADDRESS",
      payload: {
        address: address
      }
    });
  };

  handleGuestPopoverOpen = () => {
    this.setState({ guestsPopover: true });
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <PlacesAutocomplete
          highlightFirstSuggestion
          value={this.props.address}
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
              <Input
                style={{
                    height: 48,
                    padding: "0 15px",
                }}
                {...getInputProps({ className: "location-search-input" })}
                value={this.props.address}
                required
                margin="dense"
                disableUnderline
                placeholder="Anywhere"
                id="suggestionsid"
              />
              <div className="autocomplete-dropdown-container location_autofill">
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
        <DateRangePicker
          noBorder
          small
          startDatePlaceholderText="Check In"
          endDatePlaceholderText="Check Out"
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
        <FormControl
          id="guestDropDownButton"
          onClick={this.handleGuestPopoverOpen}
        >
          <Input
            style={{
              height: 48,
              padding: "0 15px",
            }}
            disableUnderline
            labelWidth={0}
            value={`${this.props.guests.total} Guests`}
          />
        </FormControl>
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
      </div>
    );
  }
}

export default connect(state => state.search)(SearchBar);
