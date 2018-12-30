import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import outline from "../../img/Outline.png";
import moon from "../../img/Moon.png";
import coin from "../../img/coinBadge.png";

class RewardsTable extends React.Component {
  state = {
    rewards: this.props.nights
  };

  componentWillMount() {
    let len = this.state.rewards.length;
    let nights = this.state.rewards;
    console.log(len);
    while (nights.length < 10) {
      nights.push(0);
      console.log(nights);
      this.setState({ rewards: [...nights] });
    }
    console.log("more than 10");
  }

  hasFreeNight = () => {
    let nights = this.state.rewards;
    if (nights.includes(0)) {
      return true;
    } else {
      return false;
    }
  };

  renderTableCells = value => {
    let nights = this.state.rewards;
    let Table = [];
    var expression = false;

    nights.map((night, index) => {
      if (value === 1) {
        expression = index < 5;
      } else if (value === 2) {
        expression = index >= 5;
      }

      if (expression) {
        if (night === 0) {
          Table.push(
            <TableCell className="cell">
              <img src={outline} className="imgSize" alt={"$" + { night }} />
              <p>${night}</p>
            </TableCell>
          );
        } else {
          Table.push(
            <TableCell className="cell">
              <img src={moon} className="imgSize" alt={"$" + { night }} />
              <p>${night}</p>
            </TableCell>
          );
        }
      }
    });
    return Table;
  };

  renderWeCoin = () => {
    if (this.hasFreeNight()) {
      return (
        <center>
          <img src={outline} className="imgSize" alt={""} />

          <p>You need more bookings</p>
        </center>
      );
    } else {
      return (
        <center>
          <img src={coin} className="imgSize" alt={""} />

          <p>FREE NIGHT Cost: ${this.props.average}</p>
        </center>
      );
    }
  };

  render() {
    return (
      <div>
        <Paper className="format">
          <Table className="format">
            <TableBody className="format2">
              <TableRow className="format2">
                {this.renderTableCells(1)}
              </TableRow>
              <TableRow className="format2">
                {this.renderTableCells(2)}
              </TableRow>

              <TableRow className="format2">
                <TableCell colSpan={5} numeric>
                  {this.renderWeCoin()}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default RewardsTable;
