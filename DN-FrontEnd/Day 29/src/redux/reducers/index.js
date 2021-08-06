import placeReducer from "./placeReducer";
import placeDataReducer from "./placeDataReducer";
import themeReducer from "./themeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  place: placeReducer,
  placeData: placeDataReducer,
  theme: themeReducer,
});

export default rootReducer;
