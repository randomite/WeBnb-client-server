import { combineReducers } from "redux";
// ADD REDUCERS HERE
import authentication from './reducers/authentication'
import user from './reducers/user'

const rootReducer = combineReducers({
  authentication: authentication,
  user: user,
});

export default rootReducer;
