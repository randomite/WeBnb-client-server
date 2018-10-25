import React from "react";
import { Button } from "@material-ui/core";

export default class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        <div
          className="gallery_main"
          onClick={e => this.props.onClick(e, 0)}
          style={{ backgroundImage: `url(${this.props.images[0].src}` }}
        />
        <div className="gallery_extra">
          <div className="col2">
            <div>
              <div
                onClick={e => this.props.onClick(e, 1)}
                style={{ backgroundImage: `url(${this.props.images[1].src}` }}
              />
            </div>
            <div>
              <div
                onClick={e => this.props.onClick(e, 2)}
                style={{ backgroundImage: `url(${this.props.images[2].src}` }}
              />
            </div>
          </div>
          <div className="col2">
            <div>
              <div
                onClick={e => this.props.onClick(e, 3)}
                style={{ backgroundImage: `url(${this.props.images[3].src}` }}
              />
            </div>
            <div>
              <div
                onClick={e => this.props.onClick(e, 4)}
                style={{ backgroundImage: `url(${this.props.images[4].src}` }}
              />
            </div>
          </div>
        </div>
        <div className="view_all">
          <Button variant="contained" onClick={e => this.props.onClick(e, 0)}>
            View all images
          </Button>
        </div>
      </div>
    );
  }
}
