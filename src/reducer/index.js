import counterReducer from "./counter";
import Loggedreducer from "./isLogged";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  counter: counterReducer,
  logged: Loggedreducer
});

export default allReducer;
