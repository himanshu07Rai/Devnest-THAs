import { combineReducers } from "redux";
import deathReducer from "./deathReducer";
import quoteReducer from "./quoteReducer";
import cReducer from "./cReducer";

const rootReducer = combineReducers({
  quote: quoteReducer,
  death: deathReducer,
  character: cReducer,
});

export default rootReducer;
