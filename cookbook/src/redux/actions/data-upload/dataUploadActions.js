import types from "./dataUploadActionTypes";

export const startRecipeUpload = (recipe) => ({
    type: types.START_RECIPE_UPLOAD,
    payload: recipe
})

export const recipeUploadSuccess = {
    type: types.RECIPE_UPLOAD_SUCCESS
}

export const recipeUploadFail = (error) => ({
    type: types.RECIPE_UPLOAD_FAIL,
    payload: error
})

export const startCookbookUpload = (cookbook) => ({
    type: types.START_COOKBOOK_UPLOAD,
    payload: cookbook
})

export const cookbookUploadSuccess = {
    type: types.COOKBOOK_UPLOAD_SUCCESS
}

export const cookbookUploadFail = (error) => ({
    type: types.RECIPE_UPLOAD_FAIL,
    payload: error
})
