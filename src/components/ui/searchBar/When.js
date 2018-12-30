import React, { Component } from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from 'react-day-picker/moment';

class When extends Component {
  constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.state = {
      from: undefined,
      to: undefined,
    };
  }
  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }
  handleFromChange(from) {
    // Change the from date and focus the "to" input field
    this.setState({ from });
  }
  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
  }
  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="InputFromTo">
        <DayPickerInput
          value={from}
          placeholder="From"
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: [{before: new Date()}, { after: to }],
            toMonth: to,
            modifiers,
            numberOfMonths: 1,
            onDayClick: () => this.to.getInput().focus(),
          }}
          onDayChange={this.handleFromChange}
        />
        <span className="InputFromTo-to">
          <DayPickerInput
            ref={el => (this.to = el)}
            value={to}
            placeholder="To"
            format="LL"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: [{ before: new Date()}, { before: from }],
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 1,
            }}
            onDayChange={this.handleToChange}
          />
        </span>
      </div>
    );
  }
}
 
export default When;
