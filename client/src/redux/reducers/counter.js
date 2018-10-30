import { INCREMENT_ADULT, DECREMENT_ADULT, INCREMENT_SENIOR, DECREMENT_SENIOR, INCREMENT_CHILDREN, DECREMENT_CHILDREN, INCREMENT_INFANT, DECREMENT_INFANT } from '../actions';

const initialState = {
    adult: 0,
    senior: 0,
    children: 0,
    infant: 0
};

const counters = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT_ADULT:
            return {...state, adult: state.adult + 1};
        case DECREMENT_ADULT:
            return {...state, adult: state.adult - 1};
        case INCREMENT_SENIOR:
            return {...state, senior: state.senior + 1};
        case DECREMENT_SENIOR:
            return {...state, senior: state.senior - 1};
        case INCREMENT_CHILDREN:
            return {...state, children: state.children + 1};
        case DECREMENT_CHILDREN:
            return {...state, children: state.children - 1};
        case INCREMENT_INFANT:
            return {...state, infant: state.infant + 1};
        case DECREMENT_INFANT:
            return {...state, infant: state.infant - 1};
        default:
            return state;
    }
}

export default counters;
