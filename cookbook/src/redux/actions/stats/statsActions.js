import types from "./statsActionTypes";

export const updateRecipeViewsStart = (id) => ({
    type: types.UPDATE_RECIPE_VIEWS_START,
    payload: id
})

export const updateRecipeViewsSuccess = {
    type: types.UPDATE_RECIPE_VIEWS_SUCCESS
}

export const updateRecipeViewsFail = {
    type: types.UPDATE_RECIPE_VIEWS_FAIL
}

export const updateCookbookViewsStart = (id) => ({
    type: types.UPDATE_COOKBOOK_VIEWS_START,
    payload: id
})

export const updateCookbookViewsSuccess = {
    type: types.UPDATE_COOKBOOK_VIEWS_SUCCESS
}

export const updateCookbookViewsFail = {
    type: types.UPDATE_COOKBOOK_VIEWS_FAIL
}