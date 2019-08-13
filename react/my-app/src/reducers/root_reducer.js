import { combineReducers } from 'redux';
import headerReducer from "./header_reducer.js";
// import appReducer from "./appReducer.js";
//import templeteReducer from "./templeteReducer.js";
import navReducer from "./nav_reducer.js";

const rootReducer = combineReducers({
  headerReducer,
//   appReducer,
  //templeteReducer,
  navReducer
});

export default rootReducer;