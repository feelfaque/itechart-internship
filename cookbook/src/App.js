import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Home from "./components/pages/home/Home";
import SignUp from "./components/pages/sign-up/SignUp";
import SignIn from "./components/pages/sign-in/SignIn";
import Profile from "./components/pages/profile/Profile";

export default function App() {
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
