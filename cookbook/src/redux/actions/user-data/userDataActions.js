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

export const updateUserNameStart = (name) => ({
    type: types.UPDATE_USER_NAME_START,
    payload: name
})

export const updateUserNameFail = (error) => ({
    type: types.UPDATE_USER_NAME_FAIL,
    payload: error
})

export const updateUserNameSuccess = {
    type: types.UPDATE_USER_NAME_SUCCESS
}

export const updateUserEmailStart = (email) => ({
    type: types.UPDATE_USER_EMAIL_START,
    payload: email
})

export const updateUserEmailFail = (error) => ({
    type: types.UPDATE_USER_EMAIL_FAIL,
    payload: error
})

export const updateUserEmailSuccess = {
    type: types.UPDATE_USER_EMAIL_SUCCESS
}

export const updateUserPasswordStart = (name) => ({
    type: types.UPDATE_USER_PASSWORD_START,
    payload: name
})

export const updateUserPasswordFail = (error) => ({
    type: types.UPDATE_USER_PASSWORD_FAIL,
    payload: error
})

export const updateUserPasswordSuccess = {
    type: types.UPDATE_USER_PASSWORD_SUCCESS
}