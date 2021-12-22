import {call, put, takeLatest} from 'redux-saga/effects';
import {db} from '../../../firebase/config';
import {collection, addDoc} from "firebase/firestore";
import {authFirebase} from "../../../firebase/config";
import types from "../../actions/data-upload/dataUploadActionTypes";
import {recipeUploadFail, recipeUploadSuccess} from "../../actions/data-upload/dataUploadActions";


const uploadRecipe = async(recipe) => {
    const currentUser = authFirebase.currentUser.uid;
    await addDoc(collection(db, "recipes"), {
        title: recipe.title,
        imageUrl: recipe.imageUrl,
        description: recipe.description,
        ingredients: recipe.ingredients,
        directions: recipe.directions,
        cookbook: recipe.cookbook,
        user: `users/${currentUser}`,
        views: 0,
        comments: 0,
        likes: 0
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