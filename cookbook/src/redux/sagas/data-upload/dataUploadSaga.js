import {all, call, put, takeLatest} from 'redux-saga/effects';
import {authFirebase, db} from '../../../firebase/config';
import {collection, doc, setDoc} from "firebase/firestore";
import types from "../../actions/data-upload/dataUploadActionTypes";
import {
    cookbookUploadFail,
    cookbookUploadSuccess,
    recipeUploadFail,
    recipeUploadSuccess
} from "../../actions/data-upload/dataUploadActions";
import {
    fetchCookbooksStart, fetchRecipesStart,
    fetchUserCookbooksStart,
    fetchUserRecipesStart
} from "../../actions/data-fetch/dataFetchActions";
import {fetchCookbooks, fetchRecipes} from "../data-fetch/dataFetchSaga";

const uploadRecipe = async({title, imageUrl, description, ingredients, directions, cookbook, userName, userId, views, comments, likes }) => {
    const ref = doc(collection(db, "recipes"));

    await setDoc(ref, {
        title,
        imageUrl,
        description,
        ingredients,
        directions,
        cookbook,
        userName,
        userId,
        views,
        comments,
        likes,
        id: ref.id
    })
}

const uploadCookbook = async({userName, userId, title, imageUrl, description, recipes, views, comments, likes}) => {
    const ref = doc(collection(db, "cookbooks"));

    await setDoc(ref, {
        userName,
        userId,
        title,
        imageUrl,
        description,
        recipes,
        views,
        comments,
        likes,
        id: ref.id
    })
}

export function* uploadRecipeToFirestore ({payload: recipe}) {
    try {
        yield uploadRecipe(recipe);
        yield put(recipeUploadSuccess);
        yield put(fetchUserRecipesStart(authFirebase.currentUser.uid));
        yield put(fetchRecipesStart);
    } catch (error) {
        yield put(recipeUploadFail(error))
    }
}

export function* uploadCookbookToFirestore({payload: cookbook}) {
    try {
        yield uploadCookbook(cookbook);
        yield put(cookbookUploadSuccess);
        yield put(fetchUserCookbooksStart(authFirebase.currentUser.uid));
        yield put(fetchCookbooksStart);
    } catch (error) {
        yield put(cookbookUploadFail(error));
    }
}
export function* onUploadRecipeStart () {
    yield takeLatest(types.START_RECIPE_UPLOAD, uploadRecipeToFirestore);
}

export function* onUploadCookbookStart () {
    yield takeLatest(types.START_COOKBOOK_UPLOAD, uploadCookbookToFirestore);
}

export function* dataUploadSaga () {
    yield all([
        call(onUploadRecipeStart),
        call(onUploadCookbookStart)
    ]);
}