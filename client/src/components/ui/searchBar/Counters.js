import React from "react";
import { connect } from "react-redux";
import {
  INCREMENT_ADULT,
  DECREMENT_ADULT,
  INCREMENT_CHILDREN,
  DECREMENT_CHILDREN
} from "../../../redux/actions";

const Counters = props => {
  return (
    <React.Fragment>
            <div className='who'>
                <div className='counters-container'> 
                    <div className='counter-item'>
                        <span className='text'>Adults</span>
                    </div>
                    <div className='counter-item'>
                        <button 
                            disabled={props.counters.adult === 0} 
                            zclassName='counter_btn' onClick={() => props.dispatch({ type: DECREMENT_ADULT })}
                        >
                        -
                        </button>
                        <span className='text'>{props.counters.adult}</span>
                        <button 
                            className='counter_btn' 
                            onClick={() => props.dispatch({ type: INCREMENT_ADULT })}
                        >
                        +
                        </button>
                    </div>
                    <div className='counter-item'>
                        <span className='text'>Children</span>
                        <br/>
                        <span>Ages 2-12</span>
                    </div>
                    <div className='counter-item'>
                        <button 
                            disabled={props.counters.children === 0} 
                            className='counter_btn' 
                            onClick={() => props.dispatch({ type: DECREMENT_CHILDREN })}
                        >
                        -
                        </button>
                        <span className='text'>{props.counters.children}</span>
                        <button 
                            className='counter_btn' 
                            onClick={() => props.dispatch({ type: INCREMENT_CHILDREN })}
                        >
                        +z
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
  );
};

export default connect(state => state.search.guests)(Counters);
