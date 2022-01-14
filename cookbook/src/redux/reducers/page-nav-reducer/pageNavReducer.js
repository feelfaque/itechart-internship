import types from "../../actions/page-nav/pageNavActionTypes";

const INITIAL_STATE = {
    currentTabs: "cookbooks",
    currentContentPageTabs: "cookbooks"
}

const pageNavReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.OPEN_RECIPES:
            return {
                ...state,
                 currentTabs: "recipes"
            }
        case types.OPEN_COOKBOOKS:
            return {
                ...state,
                currentTabs: "cookbooks"
            }
        case types.OPEN_EDIT:
            return {
                ...state,
                currentTabs: "edit"
            }
        case types.OPEN_CONTENT_COOKBOOKS:
            return {
                ...state,
                currentContentPageTabs: "cookbooks"
            }
        case types.OPEN_CONTENT_RECIPES:
            return {
                ...state,
                currentContentPageTabs: "recipes"
            }
        default: return state;
    }
}

export default pageNavReducer;