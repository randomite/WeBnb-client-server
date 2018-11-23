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
  hasFreeNight = () => {
    var len = this.props.nights.length;
    let nights = this.props.nights;
    if (len === 10) {
      return true;
    } else {
      return false;
    }
  };

  calculateAverage = () => {
    let len = this.props.nights.length;
    if (this.hasFreeNight()) {
      let sum = this.props.nights.reduce(
        (previous, current) => (current += previous)
      );
      let avg = sum / len;
      return avg;
    }
  };

  renderTableCells = value => {
    let nights = this.props.nights;
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
                  <center>
                    <img src={coin} className="imgSize" alt={""} />

                    <p>FREE NIGHT Cost: {this.calculateAverage()}</p>
                  </center>
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
