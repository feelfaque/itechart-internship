import types from "./imageStorageActionTypes";

export const selectRecipeImage = (image) => ({
    type: types.SELECT_RECIPE_IMAGE,
    payload: image
})

export const startImageUpload = (image) => ({
    type: types.START_IMAGE_UPLOAD,
    payload: image
})

export const imageUploadSuccess = (url) => ({
    type: types.IMAGE_UPLOAD_SUCCESS,
    payload: url
})

export const imageUploadFail = (error) => ({
    type: types.IMAGE_UPLOAD_FAIL,
    payload: error
})

export const resetImageData = {
    type: types.RESET_IMAGE_DATA
}