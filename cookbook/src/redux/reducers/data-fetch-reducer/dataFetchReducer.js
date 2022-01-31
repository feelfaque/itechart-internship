import types from "../../actions/data-fetch/dataFetchActionTypes";

const INITIAL_STATE = {
        userRecipes: [],
        allRecipes: [],
        userCookbooks: [],
        allCookbooks: [],
        error: null
}

const sortItems = (arr, value) => {
    return arr.slice().sort(function(a, b) {
        return a[value] - b[value];
    })
}

const dataFetchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FETCH_USER_RECIPES_SUCCESS:
            return {
                ...state,
                userRecipes: action.payload,
                error: null
            }
        case types.FETCH_USER_RECIPES_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case types.FETCH_USER_COOKBOOKS_SUCCESS:
            return {
                ...state,
                userCookbooks: action.payload,
                error: null
            }
        case types.FETCH_USER_COOKBOOKS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case types.FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                allRecipes: action.payload,
                error: null
            }
        case types.FETCH_RECIPES_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case types.FETCH_COOKBOOKS_SUCCESS:
            return {
                ...state,
                allCookbooks: action.payload,
                error: null
            }
        case types.FETCH_COOKBOOKS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case types.SORT_RECIPES_BY_VIEWS:
            return {
                ...state,
                allRecipes: sortItems(state.allRecipes,"views")
            }
        case types.SORT_RECIPES_BY_LIKES:
            return {
                ...state,
                allRecipes: sortItems(state.allRecipes, "likes")
            }
        case types.SORT_COOKBOOKS_BY_VIEWS:
            return {
                ...state,
                allCookbooks: sortItems(state.allCookbooks,"views")
            }
        case types.SORT_COOKBOOKS_BY_LIKES:
            return {
                ...state,
                allCookbooks: sortItems(state.allCookbooks, "likes")
            }
        default: return state;
    }
}

export default dataFetchReducer;