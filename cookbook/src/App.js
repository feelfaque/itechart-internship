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
import {imageUploadFail, startImageUpload} from "./redux/actions/image-storage/imageStorageActions";
import {getContentId, getCurrentModal} from "./helpers/helpers";

export default function App() {
    const dispatch = useDispatch();
    const currentUserId = useSelector(state => {
        if (state.auth.currentUser) {
            return state.auth.currentUser.uid;
        } else return null;
    });
    const currentModal = useSelector(getCurrentModal);
    const selectedId = useSelector(getContentId);

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

    const handleFileChange = (input) => {
        const selectedImage = input.files[0];
        if (!selectedImage) {
            dispatch(imageUploadFail("Image's not selected!"));
            return;
        }
        if (!selectedImage.type.includes('image')) {
            dispatch(imageUploadFail("Selected file must be an image"));
            return;
        }
        if (selectedImage.size > 1000000) {
            dispatch(imageUploadFail("Selected image is too big"));
            return;
        }
        dispatch(imageUploadFail(null));
        dispatch(startImageUpload(selectedImage));
    }

    return (
        <div className="App">
            <Routes>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<SignIn/>}/>
                <Route exact path="/" element={<Home handleFileChange={handleFileChange} currentModal={currentModal}/>}/>
                <Route path="/content" element={<ContentPage handleFileChange={handleFileChange} currentModal={currentModal} selectedId={selectedId}/>}/>
                <Route path="/profile" element={<Profile handleFileChange={handleFileChange} currentModal={currentModal} selectedId={selectedId}/>}/>
            </Routes>
        </div>
    );
}
