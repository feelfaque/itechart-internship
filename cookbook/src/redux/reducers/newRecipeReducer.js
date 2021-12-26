import types from "../actions/new-recipe/newRecipeActionTypes";

const INITIAL_STATE = {
    title: null,
    imageUrl: null,
    description: null,
    ingredients: [],
    directions: null,
    cookbook: null,
    userName: null,
    userId: JSON.parse(localStorage.getItem('user')).uid,
    views: 0,
    comments: 0,
    likes: 0
};

const newRecipeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        case types.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients.filter((item, i) => i !== parseInt(action.payload))
            }
        case types.ADD_RECIPE_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case types.ADD_RECIPE_IMAGE:
            return {
                ...state,
                imageUrl: action.payload
            }
        case types.ADD_RECIPE_DESCRIPTION:
            return {
                ...state,
                description: action.payload
            }
        case types.ADD_RECIPE_DIRECTIONS:
            return {
                ...state,
                directions: action.payload
            }
        case types.ADD_RECIPE_USERNAME:
            return {
                ...state,
                userName: action.payload
            }
        case types.RESET_RECIPE_DATA:
            return INITIAL_STATE;
        default: return state;
    }
}

export default newRecipeReducer;

