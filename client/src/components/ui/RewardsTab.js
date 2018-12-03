import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import RewardsTable from "../ui/RewardsTable";

class RewardsTab extends React.Component {
  state = {
    value: 0
  };

  renderTabs = () => {
    let nights = this.props.data.freeNights;
    let average = this.props.data.average;
    console.log("Averages:" + average);
    return nights.map(
      (night, index) =>
        this.state.value === index && (
          <RewardsTable nights={night} average={average[index]} />
        )
    );
  };

  renderTabContainer = () => {
    let nights = this.props.data.freeNights;
    return nights.map((night, index) => (
      <Tab label={"Free Night " + (index + 1)} />
    ));
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <AppBar position="static" className="RewardsappBarSize">
          <Tabs value={value} onChange={this.handleChange}>
            {this.renderTabContainer()}
          </Tabs>
        </AppBar>
        {this.renderTabs()}
      </div>
    );
  }
}

export default RewardsTab;
