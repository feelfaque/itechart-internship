import types from "../../actions/stats/statsActionTypes";
import {authFirebase, db} from "../../../firebase/config";
import {doc, updateDoc} from "firebase/firestore";
import {
    updateCookbookLikesFail, updateCookbookLikesSuccess,
    updateCookbookViewsFail,
    updateCookbookViewsSuccess, updateRecipeLikesFail, updateRecipeLikesSuccess,
    updateRecipeViewsFail,
    updateRecipeViewsSuccess
} from "../../actions/stats/statsActions";
import {all, call, put, takeLatest} from "redux-saga/effects";
import {
    fetchCookbooksStart,
    fetchRecipesStart,
    fetchUserCookbooksStart,
    fetchUserRecipesStart
} from "../../actions/data-fetch/dataFetchActions";
import firebase from "firebase/compat";


const incrementRecipeViews = async(id) => {
    const ref = doc(db, "recipes", id);
    await updateDoc(ref, {
        views: firebase.firestore.FieldValue.increment(1)
    })
}

const incrementCookbookViews = async(id) => {
    const ref = doc(db, "cookbooks", id);
    await updateDoc(ref, {
        views: firebase.firestore.FieldValue.increment(1)
    })
}

const updateRecipeLikes = async(id) => {
    const ref = doc(db, "recipes", id);

    await updateDoc(ref, {
        likes: firebase.firestore.FieldValue.arrayUnion(authFirebase.currentUser.uid),
    })
}

const updateCookbookLikes = async(id) => {
    const ref = doc(db, "cookbooks", id);

    await updateDoc(ref, {
        likes: firebase.firestore.FieldValue.arrayUnion(authFirebase.currentUser.uid),
    })
}

export function* updateRecipeViews ({payload: id}) {
    try {
        yield incrementRecipeViews(id);
        yield put(updateRecipeViewsSuccess);
        yield put(fetchRecipesStart)
        yield put(fetchUserRecipesStart(authFirebase.currentUser.uid));
    } catch {
        put(updateRecipeViewsFail);
    }
}

export function* updateCookbookViews ({payload: id}) {
    try {
        yield incrementCookbookViews(id);
        yield put(updateCookbookViewsSuccess);
        yield put(fetchCookbooksStart);
        yield put(fetchUserCookbooksStart(authFirebase.currentUser.uid));
    } catch {
        put(updateCookbookViewsFail);
    }
}

export function* updateRecipeLikesStart ({payload: id}) {
    try {
        yield updateRecipeLikes(id);
        yield put(updateRecipeLikesSuccess);
        yield put(fetchRecipesStart)
        yield put(fetchUserRecipesStart(authFirebase.currentUser.uid));
    }   catch {
        put(updateRecipeLikesFail);
    }
}

export function* updateCookbookLikesStart ({payload: id}) {
    try {
        yield updateCookbookLikes(id);
        yield put(updateCookbookLikesSuccess);
        yield put(fetchCookbooksStart);
        yield put(fetchUserCookbooksStart(authFirebase.currentUser.uid));
    } catch {
        yield put(updateCookbookLikesFail)
    }
}

export function* onUpdateRecipeViewsStart () {
    yield takeLatest(types.UPDATE_RECIPE_VIEWS_START, updateRecipeViews);
}

export function* onUpdateCookbookViewsStart () {
    yield takeLatest(types.UPDATE_COOKBOOK_VIEWS_START, updateCookbookViews);
}

export function* onUpdateRecipeLikesStart () {
    yield takeLatest(types.UPDATE_RECIPE_LIKES_START, updateRecipeLikesStart);
}

export function* onUpdateCookbookLikesStart () {
    yield takeLatest(types.UPDATE_COOKBOOK_LIKES_START, updateCookbookLikesStart);
}
export function* statsSaga () {
    yield all([
        call(onUpdateRecipeViewsStart),
        call(onUpdateCookbookViewsStart),
        call(onUpdateRecipeLikesStart),
        call(onUpdateCookbookLikesStart)
    ])
}