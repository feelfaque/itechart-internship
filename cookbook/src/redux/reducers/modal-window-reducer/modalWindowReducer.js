import types from "../../actions/modal-window/modalWindowActionTypes";

const INITIAL_STATE = {
    currentModal: null,
    contentId: null
}

const modalWindowReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.OPEN_NEW_COOKBOOK_MODAL:
            return {
                ...state,
                currentModal: "new-cookbook"
            }
        case types.OPEN_NEW_RECIPE_MODAL:
            return {
                ...state,
                currentModal: "new-recipe"
            }
        case types.OPEN_COOKBOOK_MODAL:
            return {
                currentModal: "cookbook",
                contentId: action.payload
            }
        case types.OPEN_RECIPE_MODAL:
            return {
                currentModal: "recipe",
                contentId: action.payload
            }
        case types.CLOSE_MODAL:
            return INITIAL_STATE;
        default: return state;
    }
}

export default modalWindowReducer;