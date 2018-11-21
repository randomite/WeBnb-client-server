import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import outline from "../../img/Outline.png";
import moon from "../../img/Moon.png";

class RewardsTable extends React.Component {
  hasFreeNight = () => {
    var len = this.props.nights.length;
    let nights = this.props.nights;
    console.log("length1:" + len);
    console.log("nights:" + nights);
    if (len === 10) {
      return true;
    } else {
      return false;
    }
  };

  calculateAverage = () => {
    let len = this.props.nights.length;
    console.log("length2:" + len);
    if (this.hasFreeNight()) {
      let sum = this.props.nights.reduce(
        (previous, current) => (current += previous)
      );
      let avg = sum / len;
      console.log("average:" + avg);
      return avg;
    }
  };

  renderTableCells1 = () => {
    let nights = this.props.nights;
    let Table = [];

    nights.map((night, index) => {
      if (index < 5) {
        if (night === 0) {
          Table.push(
            <TableCell>
              <img src={outline} style={{ width: "50px", height: "50px" }} />
              <p>${night}</p>
            </TableCell>
          );
        } else {
          Table.push(
            <TableCell>
              <img src={moon} style={{ width: "50px", height: "50px" }} />
              <p>${night}</p>
            </TableCell>
          );
        }
      }
    });
    return Table;
  };

  renderTableCells2 = () => {
    let nights = this.props.nights;
    let Table = [];

    nights.map((night, index) => {
      if (index >= 5) {
        if (night === 0) {
          Table.push(
            <TableCell>
              <img src={outline} style={{ width: "50px", height: "50px" }} />
              <p>$ {night}</p>
            </TableCell>
          );
        } else {
          Table.push(
            <TableCell>
              <img src={moon} style={{ width: "50px", height: "50px" }} />
              <p>$ {night}</p>
            </TableCell>
          );
        }
      }
    });
    return Table;
  };

  render() {
    return (
      <div>
        <Paper style={{ width: "60%", margin: "auto" }}>
          <Table style={{ width: "100%", margin: "auto" }}>
            <TableBody>
              <TableRow>{this.renderTableCells1()}</TableRow>
              <TableRow>{this.renderTableCells2()}</TableRow>
              <TableCell>FREE NIGHT Cost: {this.calculateAverage()}</TableCell>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default RewardsTable;
