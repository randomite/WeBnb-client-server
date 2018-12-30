import { combineReducers } from "redux";
// ADD REDUCERS HERE
import authentication from './reducers/authentication'
import user from './reducers/user'
import search from './reducers/search'
import booking from './reducers/booking'

const rootReducer = combineReducers({
  authentication: authentication,
  user: user,
  booking: booking,
  search: search,
});

export default rootReducer;
