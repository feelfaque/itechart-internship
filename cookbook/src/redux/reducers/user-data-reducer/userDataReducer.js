import types from "../../actions/user-data/userDataActionTypes";

const CURRENT_USER_INFO = {
    user: null,
    error: null
};

const userDataReducer = (state = CURRENT_USER_INFO, action) => {
    switch (action.type) {
        case types.FETCH_USER_DATA_SUCCESS: return {
                ...state,
                user: action.payload
            }
        case types.FETCH_USER_DATA_FAIL: return {
            ...state,
            error: action.payload
        }
        default: return state;
    }
}

export default userDataReducer;