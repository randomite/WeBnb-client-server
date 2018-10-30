import { combineReducers } from "redux";
// ADD REDUCERS HERE
import authentication from './reducers/authentication'
import user from './reducers/user'
import search from './reducers/search'

const rootReducer = combineReducers({
  authentication: authentication,
  user: user,
  search: search,
});

export default rootReducer;
