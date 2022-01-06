import {all, call, put, takeLatest} from 'redux-saga/effects';
import {db} from '../../../firebase/config';
import {collection, addDoc} from "firebase/firestore";
import types from "../../actions/data-upload/dataUploadActionTypes";
import {
    cookbookUploadFail,
    cookbookUploadSuccess,
    recipeUploadFail,
    recipeUploadSuccess
} from "../../actions/data-upload/dataUploadActions";
import cryptoRandomString from "crypto-random-string";

const generateRecipeId = () => {
    return cryptoRandomString({length: 7});
}

const uploadRecipe = async({title, imageUrl, description, ingredients, directions, cookbook, userName, userId, views, comments, likes }) => {
    const recipeId = generateRecipeId();

    await addDoc(collection(db, "recipes"), {
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
        recipeId: recipeId
    });
}

const uploadCookbook = async({userName, userId, title, imageUrl, description, recipes, views, comments, likes}) => {
    await addDoc(collection(db, "cookbooks"), {
        userName,
        userId,
        title,
        imageUrl,
        description,
        recipes,
        views,
        comments,
        likes
    });
}

export function* uploadRecipeToFirestore ({payload: recipe}) {
    try {
        yield uploadRecipe(recipe);
        yield put(recipeUploadSuccess);
    } catch (error) {
        yield put(recipeUploadFail(error))
    }
}

export function* uploadCookbookToFirestore({payload: cookbook}) {
    try {
        yield uploadCookbook(cookbook);
        yield put(cookbookUploadSuccess);
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