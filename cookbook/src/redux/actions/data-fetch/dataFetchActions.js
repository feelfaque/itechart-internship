import types from "./dataFetchActionTypes";

export const fetchUserRecipesStart = (userId) => ({
    type: types.FETCH_USER_RECIPES_START,
    payload: userId
})

export const fetchUserRecipesSuccess = (userRecipes) => ({
    type: types.FETCH_USER_RECIPES_SUCCESS,
    payload: userRecipes
})

export const fetchUserRecipesFail = (error) => ({
    type: types.FETCH_USER_RECIPES_FAIL,
    payload: error
})

export const fetchUserCookbooksStart = (userId) => ({
    type: types.FETCH_USER_COOKBOOKS_START,
    payload: userId
})

export const fetchUserCookbooksSuccess = (userCookbooks) => ({
    type: types.FETCH_USER_COOKBOOKS_SUCCESS,
    payload: userCookbooks,
})

export const fetchUserCookbooksFail = (error) => ({
    type: types.FETCH_USER_COOKBOOKS_FAIL,
    payload: error
})