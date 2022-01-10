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

export const updateUserAvatarStart = (url) => ({
    type: types.UPDATE_USER_AVATAR_START,
    payload: url
})

export const updateUserAvatarFail = (error) => ({
    type: types.UPDATE_USER_AVATAR_FAIL,
    payload: error
})

export const updateUserAvatarSuccess = {
    type: types.UPDATE_USER_AVATAR_SUCCESS
}