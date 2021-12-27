import types from "../../actions/data-upload/dataUploadActionTypes";

const INITIAL_STATE = {
    error: null,
    message: null
}

const dataUploadReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.RECIPE_UPLOAD_SUCCESS:
            return {
                error: null,
                message: "Recipe's been uploaded"
            }
        case types.RECIPE_UPLOAD_FAIL:
            return {
                error: action.payload,
                message: null
            }
        default: return state;
    }
}

export default dataUploadReducer;