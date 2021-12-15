import { combineReducers } from "redux";

import auth from './authReducer';
import profileNavReducer from "./profileNavReducer";
import userDataReducer from "./userDataReducer";
import openModalReducer from "./openModalReducer";

export default combineReducers({auth, profileNavReducer, userDataReducer, openModalReducer});