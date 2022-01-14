import types from "../../actions/data-fetch/dataFetchActionTypes";

const INITIAL_STATE = {
        userRecipes: [],
        allRecipes: [],
        userCookbooks: [],
        allCookbooks: [],
        error: null
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
        default: return state;
    }
}

export default dataFetchReducer;