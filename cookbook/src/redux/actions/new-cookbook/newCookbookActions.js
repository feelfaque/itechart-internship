import types from "./newCookbookActionTypes";

export const addCookbookUsername = (name) => ({
    type: types.ADD_COOKBOOK_USERNAME,
        payload: name
}
)
export const addCookbookTitle = (title) => ({
    type: types.ADD_COOKBOOK_TITLE,
    payload: title
})

export const addCookbookImage = (imageUrl) => ({
    type: types.ADD_COOKBOOK_IMAGE,
    payload: imageUrl
})

export const addCookbookDescription = (description) => ({
    type: types.ADD_COOKBOOK_DESCRIPTION,
    payload: description
})

export const addRecipe = (recipe) => ({
    type: types.ADD_RECIPE,
    payload: recipe
})

export const deleteRecipe = (recipeId) => ({
    type: types.DELETE_RECIPE,
    payload: recipeId
})

export const resetCookbookData = {
    type: types.RESET_COOKBOOK_DATA
}
