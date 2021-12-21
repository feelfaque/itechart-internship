import types from "../actions/image-storage/imageStorageActionTypes";

const INITIAL_STATE = {
    selectedImage: null,
    imageURL: null,
    message: null,
    error: null
}

const imageStorageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SELECT_RECIPE_IMAGE:
            return {
                ...state,
                selectedImage: action.payload,
                message: "Image's selected"
            }
        case types.IMAGE_UPLOAD_SUCCESS:
            return {
                ...state,
                imageURL: action.payload,
                message: "Image's uploaded"
            }
        case types.IMAGE_UPLOAD_FAIL:
        return {
            ...state,
                error: action.payload
        }
        case types.RESET_IMAGE_DATA:
            return INITIAL_STATE;
        default: return state;
    }
}

export default imageStorageReducer;