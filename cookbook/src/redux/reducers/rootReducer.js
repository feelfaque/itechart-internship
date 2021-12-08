import { combineReducers } from "redux";

import auth from './authReducer';
import profileNavReducer from "./profileNavReducer";
import userDataReducer from "./userDataReducer";

export default combineReducers({auth, profileNavReducer, userDataReducer});