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