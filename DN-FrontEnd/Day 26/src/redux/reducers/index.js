import { combineReducers } from "redux";
import user from "./user";
import password from "./password";

export default combineReducers({ user, password });
