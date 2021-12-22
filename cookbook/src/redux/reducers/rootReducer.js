import { combineReducers } from "redux";

import auth from './authReducer';
import profileNavReducer from "./profileNavReducer";
import userDataReducer from "./userDataReducer";
import modalWindowReducer from "./modalWindowReducer";
import newRecipeReducer from "./newRecipeReducer";
import imageStorageReducer from "./imageStorageReducer";
import dataUploadReducer from "./dataUploadReducer";

export default combineReducers({auth, profileNavReducer, userDataReducer, modalWindowReducer, newRecipeReducer, imageStorageReducer, dataUploadReducer});