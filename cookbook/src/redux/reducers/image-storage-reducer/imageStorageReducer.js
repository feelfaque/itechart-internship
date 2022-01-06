import types from "../../actions/image-storage/imageStorageActionTypes";

const INITIAL_STATE = {
    imageURL: null,
    message: null,
    error: null
}

const imageStorageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.IMAGE_UPLOAD_SUCCESS:
            return {
                ...state,
                imageURL: action.payload,
                message: "Image's uploaded"
            }
        case types.IMAGE_UPLOAD_FAIL:
        return {
            ...INITIAL_STATE,
                error: action.payload
        }
        case types.RESET_IMAGE_DATA:
            return INITIAL_STATE;
        default: return state;
    }
}

export default imageStorageReducer;