import React from "react";
import { withRouter } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer ">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Terms</a></li>
                  <li><a className="grey-text text-lighten-3" href="/privacy">Privacy</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Home </a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text

            </div>
          </div>
        </footer>
    );
  }
}

export default withRouter(Footer);
