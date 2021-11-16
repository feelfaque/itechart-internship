import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import SignUp from "./components/pages/sign-up/SignUp";
import SignIn from "./components/pages/sign-in/SignIn";

export default function App() {
  return (
    <div className="App">
            <Routes>
                <Route exact path="/"/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/login" element={<SignIn />}/>
            </Routes>
    </div>
  );
}
