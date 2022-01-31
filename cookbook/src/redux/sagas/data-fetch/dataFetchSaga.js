import {all, call, put, takeLatest} from "redux-saga/effects";
import types from "../../actions/data-fetch/dataFetchActionTypes";
import {
    fetchCookbooksFail,
    fetchCookbooksSuccess,
    fetchRecipesFail, fetchRecipesSuccess,
    fetchUserCookbooksFail, fetchUserCookbooksSuccess,
    fetchUserRecipesFail,
    fetchUserRecipesSuccess
} from "../../actions/data-fetch/dataFetchActions";
import {query, collection, getDocs, where} from "firebase/firestore";
import {db} from "../../../firebase/config";

const fetchUserRecipesFromFirebase = async (userId) => {
    const q = query(collection(db, "recipes"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const recipes = [];
    querySnapshot.forEach((doc) => {
        recipes.push(doc.data());
    });
    return recipes
}

const fetchUserCookbooksFromFirebase = async (userId) => {
    const q = query(collection(db, "cookbooks"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const cookbooks = [];
    querySnapshot.forEach((doc) => {
        cookbooks.push(doc.data());
    });
    return cookbooks;
}

const fetchRecipesFromFirebase = async () => {
    const q = query(collection(db, "recipes"));
    const querySnapshot = await getDocs(q);
    const recipes = [];
    querySnapshot.forEach(doc => {
        recipes.push(doc.data());
    })
    return recipes;
}

const fetchCookbooksFromFirebase = async () => {
    const q = query(collection(db, "cookbooks"));
    const querySnapshot = await getDocs(q);
    const cookbooks = [];
    querySnapshot.forEach(doc => {
        cookbooks.push(doc.data());
    })
    return cookbooks;
}

export function* fetchUserRecipes({payload: userId}) {
    try {
        let userRecipes = yield call(fetchUserRecipesFromFirebase, userId);
        yield put(fetchUserRecipesSuccess(userRecipes));

    } catch (error) {
        yield put(fetchUserRecipesFail(error))
    }
}

export function* fetchUserCookbooks({payload: userId}) {
    try {
        let userCookbooks = yield call(fetchUserCookbooksFromFirebase, userId);
        yield put(fetchUserCookbooksSuccess(userCookbooks));
    } catch (error) {
        yield put(fetchUserCookbooksFail(error));
    }
}

export function* fetchRecipes() {
    try {
        let allRecipes = yield call(fetchRecipesFromFirebase);
        yield put(fetchRecipesSuccess(allRecipes));
    } catch (error) {
        yield put(fetchRecipesFail(error));
    }
}

export function* fetchCookbooks() {
    try {
        let allCookbooks = yield call(fetchCookbooksFromFirebase);
        yield put(fetchCookbooksSuccess(allCookbooks));
    } catch (error) {
        yield put(fetchCookbooksFail(error));
    }
}

export function* onFetchUserRecipesStart() {
    yield takeLatest(types.FETCH_USER_RECIPES_START, fetchUserRecipes)
}

export function* onFetchUserCookbooksStart() {
    yield takeLatest(types.FETCH_USER_COOKBOOKS_START, fetchUserCookbooks)
}

export function* onFetchRecipesStart() {
    yield takeLatest(types.FETCH_RECIPES_START, fetchRecipes);
}

export function* onFetchCookbooksStart() {
    yield takeLatest(types.FETCH_COOKBOOKS_START, fetchCookbooks);
}

export function* dataFetchSaga() {
    yield all([
        call(onFetchUserRecipesStart),
        call(onFetchUserCookbooksStart),
        call(onFetchRecipesStart),
        call(onFetchCookbooksStart)
    ]);
}