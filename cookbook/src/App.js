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
import {addUserToLocalStorage} from "./firebase/config";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserDataStart} from "./redux/actions/user-data/userDataActions";

export default function App() {
    useEffect(addUserToLocalStorage);
    const dispatch = useDispatch();
    const currentUserId = useSelector(state => state.auth.currentUser.uid);
    const fetchUserData = () => {
        dispatch(fetchUserDataStart(currentUserId));
    }
    useEffect(fetchUserData, [dispatch, currentUserId]);

    return (
    <div className="App">
                <Routes>
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path="/login" element={<SignIn />}/>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/recipes" />
                    <Route path="/cookbooks" />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
    </div>
  );
}
