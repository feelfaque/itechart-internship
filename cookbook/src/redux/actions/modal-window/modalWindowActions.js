import types from "./modalWindowActionTypes";

export const openNewCookbookModalAction = {
    type: types.OPEN_NEW_COOKBOOK_MODAL
}

export const openNewRecipeModalAction = {
    type: types.OPEN_NEW_RECIPE_MODAL
}

export const closeModalAction = {
    type: types.CLOSE_MODAL
}

export const openCookbookModal = (id) => ({
    type: types.OPEN_COOKBOOK_MODAL,
    payload: id
})

export const openRecipeModal = (id) => ({
    type: types.OPEN_RECIPE_MODAL,
    payload: id
})
