import React from "react";
import { connect } from "react-redux";
import {
  INCREMENT_ADULT,
  DECREMENT_ADULT,
  INCREMENT_CHILDREN,
  DECREMENT_CHILDREN
} from "../../../redux/actions";

const Counters = props => {
  var total = props.adults + props.children;
  return (
    <React.Fragment>
      <div className="who">
        <div className="adults">
          <div className="form-inline">
            <span className="counter_text">Adults</span>
            <button
              disabled={props.adults === 0}
              className="counter_btn"
              onClick={() => props.dispatch({ type: DECREMENT_ADULT })}
            >
              -
            </button>
            <span className="counter_text">{props.adults}</span>
            <button
              disabled={total === 2}
              className="counter_btn"
              onClick={() => props.dispatch({ type: INCREMENT_ADULT })}
            >
              +
            </button>
          </div>
        </div>
        <div className="children">
          <div className="form-inline">
            <span className="counter_text">Children</span>
            <div>
              <button
                disabled={props.children === 0}
                className="counter_btn"
                onClick={() => props.dispatch({ type: DECREMENT_CHILDREN })}
              >
                -
              </button>
              <span className="counter_text">{props.children}</span>
              <button
                disabled={total === 2}
                className="counter_btn"
                onClick={() => props.dispatch({ type: INCREMENT_CHILDREN })}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default connect(state => state.search.guests)(Counters);
