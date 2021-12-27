import {combineReducers} from "redux";

import auth from './auth-reducer/authReducer';
import profileNavReducer from "./profile-nav-reducer/profileNavReducer";
import userDataReducer from "./user-data-reducer/userDataReducer";
import modalWindowReducer from "./modal-window-reducer/modalWindowReducer";
import newRecipeReducer from "./new-recipe-reducer/newRecipeReducer";
import imageStorageReducer from "./image-storage-reducer/imageStorageReducer";
import dataUploadReducer from "./data-upload-reducer/dataUploadReducer";
import dataFetchReducer from "./data-fetch-reducer/dataFetchReducer";

export default combineReducers({
    auth,
    profileNavReducer,
    userDataReducer,
    modalWindowReducer,
    newRecipeReducer,
    imageStorageReducer,
    dataUploadReducer,
    dataFetchReducer
});