import types from "./userDataActionTypes";

export const fetchUserDataStart = (userID) => ({
    type: types.FETCH_USER_DATA_START,
    payload: userID
})

export const fetchUserDataFail = (error) => ({
    type: types.FETCH_USER_DATA_FAIL,
    payload: error
})

export const fetchUserDataSuccess = (userData) => ({
    type: types.FETCH_USER_DATA_SUCCESS,
    payload: userData
})