import React from "react";
import { withRouter } from "react-router-dom";

class MapMarker extends React.Component {
  handleNavigate = () => {
    this.props.history.push({pathname: '/hotel', search: new URLSearchParams({id: this.props.id }).toString()});

  };

  render() {
    return (
      <div className="marker">
        <div className="marker-text" onClick={this.handleNavigate}>
          ${this.props.price}
        </div>
      </div>
    );
  }
}

export default withRouter(MapMarker);
