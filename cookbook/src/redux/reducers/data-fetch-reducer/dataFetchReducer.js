import types from "../../actions/data-fetch/dataFetchActionTypes";

const INITIAL_STATE = {
    recipes: {
        userRecipes: [],
        allRecipes: []
    },
    cookbooks: {
        userCookbooks: [],
        allCookbooks: []
    },
    error: null
}

const dataFetchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FETCH_USER_RECIPES_SUCCESS:
            return {
                ...state,
                recipes: {
                    userRecipes: action.payload
                }
            }
        case types.FETCH_USER_RECIPES_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
}

export default dataFetchReducer;