import types from "../../actions/user-data/userDataActionTypes";

const INITIAL_STATE = {
    user: null,
    error: null
};

const userDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FETCH_USER_DATA_SUCCESS: return {
                ...state,
                user: action.payload
            }
        case types.FETCH_USER_DATA_FAIL: return {
            ...state,
            error: action.payload
        }
        case types.UPDATE_USER_AVATAR_FAIL: return {
            ...state,
            error: action.payload
        }
        case types.UPDATE_USER_NAME_FAIL: return {
            ...state,
            error: action.payload
        }
        case types.UPDATE_USER_EMAIL_FAIL: return {
            ...state,
            error: action.payload
        }
        case types.UPDATE_USER_PASSWORD_FAIL: return {
            ...state,
            error: action.payload
        }
        case types.RESET_USER_DATA:
            return INITIAL_STATE;
        default: return state;
    }
}

export default userDataReducer;