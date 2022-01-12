import types from "../../actions/profile-nav/profileNavActionTypes";

const INITIAL_STATE = {
    currentTabs: "cookbooks"
}

const profileNavReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.OPEN_RECIPES:
            return {
                 currentTabs: "recipes"
            }
        case types.OPEN_COOKBOOKS:
            return {
                currentTabs: "cookbooks"
            }
        case types.OPEN_EDIT:
            return {
                currentTabs: "edit"
            }
        default: return state;
    }
}

export default profileNavReducer;