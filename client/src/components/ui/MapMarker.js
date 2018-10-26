import React from "react";
import { withRouter } from "react-router-dom";

class MapMarker extends React.Component {
  handleNavigate = () => {
    this.props.history.push("hotel/" + this.props.id);
  };

  render() {
    return (
      <div className="marker">
        <div className="marker-text">{this.props.price}</div>
      </div>
    );
  }
}

export default withRouter(MapMarker);
