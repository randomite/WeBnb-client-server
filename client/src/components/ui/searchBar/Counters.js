import React from 'react';
import { connect } from 'react-redux';
import { INCREMENT_ADULT, DECREMENT_ADULT, INCREMENT_SENIOR, DECREMENT_SENIOR, INCREMENT_CHILDREN, DECREMENT_CHILDREN, INCREMENT_INFANT, DECREMENT_INFANT } from '../../../redux/actions';

const mapStateToProps = (state) => {
    return {
        counters: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        incrementAdult() {
            dispatch({type: INCREMENT_ADULT});
        },
        decrementAdult() {
            dispatch({type: DECREMENT_ADULT});
        },
        incrementSenior() {
            dispatch({type: INCREMENT_SENIOR});
        },
        decrementSenior() {
            dispatch({type: DECREMENT_SENIOR});
        },
        incrementChildren() {
            dispatch({type: INCREMENT_CHILDREN});
        },
        decrementChildren() {
            dispatch({type: DECREMENT_CHILDREN});
        },
        incrementInfant() {
            dispatch({type: INCREMENT_INFANT});
        },
        decrementInfant() {
            dispatch({type: DECREMENT_INFANT});
        }
    })
};

const Counters = (props) => {
    var total = props.counters.adult + props.counters.senior + props.counters.children;
    return ( 
        <React.Fragment>
        <div className='who'>
            <div className='adults'>
                <div className="form-inline">
                    <span className='counter_text'>Adults</span>
                    <button disabled={props.counters.adult === 0} className='counter_btn' onClick={() => props.decrementAdult()}>-</button>
                    <span className='counter_text'>{props.counters.adult}</span>
                    <button disabled={total === 2} className='counter_btn' onClick={() => props.incrementAdult()}>+</button>
                </div>
            </div>
            <div className='seniors'>
                <div className='form-inline'>
                    <span className='counter_text'>Seniors</span>
                    <button disabled={props.counters.senior === 0} className='counter_btn' onClick={() => props.decrementSenior()}>-</button>
                    <span className='counter_text'>{props.counters.senior}</span>
                    <button disabled={total === 2} className='counter_btn' onClick={() => props.incrementSenior()}>+</button>
                </div>
            </div>
            <div className='children'>
                <div className='form-inline'>
                    <span className='counter_text'>Children</span>
                    <button disabled={props.counters.children === 0} className='counter_btn' onClick={() => props.decrementChildren()}>-</button>
                    <span className='counter_text'>{props.counters.children}</span>
                    <button disabled={total === 2} className='counter_btn' onClick={() => props.incrementChildren()}>+</button>
                </div>
            </div>
            <div className='infants'>
                <div className='form-inline'>
                    <span className='counter_text'>Infants</span>
                    <button disabled={props.counters.infant === 0} className='counter_btn' onClick={() => props.decrementInfant()}>-</button>
                    <span className='counter_text'>{props.counters.infant}</span>
                    <button className='counter_btn' onClick={() => props.incrementInfant()}>+</button>
                </div>
            </div>
        </div>
        </React.Fragment>
     );
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Counters);


