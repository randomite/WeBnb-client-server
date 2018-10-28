import { combineReducers } from "redux";
// ADD REDUCERS HERE
import authentication from './reducers/authentication'
import user from './reducers/user'
import counter from './reducers/counter';

const rootReducer = combineReducers({
  authentication: authentication,
  user: user,
  counter: counter
});

export default rootReducer;
