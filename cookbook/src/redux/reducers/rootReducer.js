import { combineReducers } from "redux";

import auth from './authReducer';
import profileNavReducer from "./profileNavReducer";

export default combineReducers({auth, profileNavReducer});