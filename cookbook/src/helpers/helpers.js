export const getCurrentUser = (state) => {
    return state.userDataReducer.user && state.userDataReducer.user;
}

export const getCurrentUserName = (state) => {
    return state.userDataReducer.user.name && state.userDataReducer.user.name;
}

export const getCurrentTabs = (state) => {
    return state.pageNavReducer.currentTabs && state.pageNavReducer.currentTabs;
}

export const getCurrentContentPageTabs = (state) => {
    return state.pageNavReducer.currentContentPageTabs && state.pageNavReducer.currentContentPageTabs;
}

export const getCurrentModal = (state) => {
    return state.modalWindowReducer.currentModal && state.modalWindowReducer.currentModal;
}

export const getContentId = (state) => {
    return state.modalWindowReducer.contentId && state.modalWindowReducer.contentId;
}

export const getAllRecipes = (state) => {
    return state.dataFetchReducer.allRecipes && state.dataFetchReducer.allRecipes;
}

export const getAllCookbooks = (state) => {
    return state.dataFetchReducer.allCookbooks && state.dataFetchReducer.allCookbooks;
}

export const getUserRecipes = (state) => {
    return state.dataFetchReducer.userRecipes && state.dataFetchReducer.userRecipes;
}

export const getUserCookbooks = (state) => {
    return state.dataFetchReducer.userCookbooks && state.dataFetchReducer.userCookbooks;
}

export const getNewRecipe = (state) => {
    return state.newRecipeReducer && state.newRecipeReducer;
}

export const getNewCookbook = (state) => {
    return state.newCookbookReducer && state.newCookbookReducer;
}

export const getImageUrl = (state) => {
    return state.imageStorageReducer.imageURL && state.imageStorageReducer.imageURL;
}

export const getImageUploadError = (state) => {
    return state.imageStorageReducer.error && state.imageStorageReducer.error;
}

export const getImageUploadMessage = (state) => {
    return state.imageStorageReducer.message && state.imageStorageReducer.message;
}
