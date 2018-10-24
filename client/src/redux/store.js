import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import freeze from "redux-freeze";
import rootReducer from "./rootReducer";
import _ from "lodash";

const logger = createLogger();
const middlewares = _.compact([thunk, freeze, logger]);
const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleWare(rootReducer);

export default store;
