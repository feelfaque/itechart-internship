import {call, put, takeLatest} from "redux-saga/effects";
import types from "../../actions/data-fetch/dataFetchActionTypes";
import {fetchUserRecipesFail, fetchUserRecipesSuccess} from "../../actions/data-fetch/dataFetchActions";
import {query, collection, getDocs, where} from "firebase/firestore";
import {db} from "../../../firebase/config";

const fetchUserRecipesFromFirebase  = async (userId) => {
    const q = query(collection(db, "recipes"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const recipes = [];
    querySnapshot.forEach((doc) => {
        recipes.push(doc.data());
    });
    return recipes
}

export function* fetchUserRecipes ({payload: userId}) {
    try {
        let userRecipes = yield call(fetchUserRecipesFromFirebase, userId);
        yield put(fetchUserRecipesSuccess(userRecipes));

    } catch (error) {
        yield put(fetchUserRecipesFail(error))
    }
}

export function* onFetchUserRecipesStart () {
    yield takeLatest(types.FETCH_USER_RECIPES_START, fetchUserRecipes)
}

export function* dataFetchSaga () {
    yield call(onFetchUserRecipesStart);
}