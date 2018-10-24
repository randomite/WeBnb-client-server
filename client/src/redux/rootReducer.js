import { combineReducers } from "redux";
// ADD REDUCERS HERE
import authentication from './reducers/authentication'
import user from './reducers/user'
import booking from './reducers/booking'

const rootReducer = combineReducers({
  authentication: authentication,
  user: user,
  booking: booking,
});

export default rootReducer;
