import types from "../../actions/new-cookbook/newCookbookActionTypes";

const INITIAL_STATE = {
    userName: null,
    userId: JSON.parse(localStorage.getItem('user')).uid,
    title: null,
    imageUrl: null,
    description: null,
    recipes: [],
    views: 0,
    comments: 0,
    likes: 0
}

const newCookbookReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_COOKBOOK_USERNAME:
            return {
                ...state,
                userName: action.payload
            }
        case types.ADD_COOKBOOK_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case types.ADD_COOKBOOK_IMAGE:
            return {
                ...state,
                imageUrl: action.payload
            }
        case types.ADD_COOKBOOK_DESCRIPTION:
            return {
                ...state,
                description: action.payload
            }
        case types.ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }
        case types.DELETE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.filter((item, i) => i !== parseInt(action.payload))
            }
        case types.RESET_COOKBOOK_DATA:
            return INITIAL_STATE;
        default:
            return state
    }
}

export default newCookbookReducer;