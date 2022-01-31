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

export const fetchRecipesStart = {
    type: types.FETCH_RECIPES_START
}

export const fetchRecipesFail = (error) => ({
    type: types.FETCH_RECIPES_FAIL,
    payload: error
})

export const fetchRecipesSuccess = (recipes) => ({
    type: types.FETCH_RECIPES_SUCCESS,
    payload: recipes
})

export const fetchCookbooksStart = {
    type: types.FETCH_COOKBOOKS_START
}
export const fetchCookbooksSuccess = (cookbooks) => ({
    type: types.FETCH_COOKBOOKS_SUCCESS,
    payload: cookbooks
})

export const fetchCookbooksFail = (error) => ({
    type: types.FETCH_COOKBOOKS_FAIL,
    payload: error
})

export const sortRecipesByViews = {
    type: types.SORT_RECIPES_BY_VIEWS
}

export const sortRecipesByLikes = {
    type: types.SORT_RECIPES_BY_LIKES
}

export const sortCookbooksByViews = {
    type: types.SORT_COOKBOOKS_BY_VIEWS
}

export const sortCookbooksByLikes = {
    type: types.SORT_COOKBOOKS_BY_LIKES
}