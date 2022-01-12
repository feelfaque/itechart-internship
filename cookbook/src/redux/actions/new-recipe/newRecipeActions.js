import types from "./newRecipeActionTypes";

export const addIngredient = (text) => ({
    type: types.ADD_INGREDIENT,
    payload: text
})

export const deleteIngredient = (index) => ({
    type: types.DELETE_INGREDIENT,
    payload: index
})

export const addRecipeTitle = (text) => ({
    type: types.ADD_RECIPE_TITLE,
    payload: text
})

export const addRecipeImage = (url) => ({
    type: types.ADD_RECIPE_IMAGE,
    payload: url
})

export const addRecipeDescription = (text) => ({
    type: types.ADD_RECIPE_DESCRIPTION,
    payload: text
})

export const addRecipeDirections = (text) => ({
    type: types.ADD_RECIPE_DIRECTIONS,
    payload: text
})

export const addRecipeUsername = (userName) => ({
    type: types.ADD_RECIPE_USERNAME,
    payload: userName
})

export const resetRecipeData = {
    type: types.RESET_RECIPE_DATA
}

