import React, {useEffect} from "react";
import {
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import Home from "./components/pages/home/Home";
import SignUp from "./components/pages/sign-up/SignUp";
import SignIn from "./components/pages/sign-in/SignIn";
import Profile from "./components/pages/profile/Profile";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserDataStart} from "./redux/actions/user-data/userDataActions";
import ContentPage from "./components/pages/content/ContentPage";
import {
    fetchCookbooksStart,
    fetchRecipesStart,
    fetchUserCookbooksStart,
    fetchUserRecipesStart
} from "./redux/actions/data-fetch/dataFetchActions";

export default function App() {
    const dispatch = useDispatch();
    const currentUserId = useSelector(state => {
        if (state.auth.currentUser) {
            return state.auth.currentUser.uid;
        } else return null;
    });
    const fetchUserData = () => {
        dispatch(fetchUserDataStart(currentUserId));
        dispatch(fetchUserRecipesStart(currentUserId));
        dispatch(fetchUserCookbooksStart(currentUserId));
    }
    const fetchData = () => {
        dispatch(fetchRecipesStart);
        dispatch(fetchCookbooksStart);
    }
    useEffect(fetchUserData, [dispatch, currentUserId]);
    useEffect(fetchData, [dispatch]);

    return (
        <div className="App">
            <Routes>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<SignIn/>}/>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/content" element={<ContentPage/>}/>
                <Route path="/cookbooks"/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    );
}
