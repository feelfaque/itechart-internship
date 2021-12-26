import {call, put, takeLatest} from 'redux-saga/effects';
import {db} from '../../../firebase/config';
import {collection, addDoc} from "firebase/firestore";
import types from "../../actions/data-upload/dataUploadActionTypes";
import {recipeUploadFail, recipeUploadSuccess} from "../../actions/data-upload/dataUploadActions";


const uploadRecipe = async({title, imageUrl, description, ingredients, directions, cookbook, userName, userId, views, comments, likes }) => {
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

export function* onUploadRecipeStart () {
    yield takeLatest(types.START_RECIPE_UPLOAD, uploadRecipeToFirestore);
}

export function* dataUploadSaga () {
    yield call(onUploadRecipeStart);
}