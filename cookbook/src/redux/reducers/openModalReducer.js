import types from "../actions/open-modal/openModalActionTypes";

const INITIAL_STATE = {
    currentModal: null
}

const openModalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.OPEN_NEW_COOKBOOK_MODAL:
            return {
                currentModal: "new-cookbook"
            }
        case types.OPEN_NEW_RECIPE_MODAL:
            return {
                currentModal: "new-recipe"
            }
        case types.CLOSE_MODAL:
            return INITIAL_STATE;
        default: return state;
    }
}

export default openModalReducer;