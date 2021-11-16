import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import SignUp from "./components/pages/sign-up/SignUp";

export default function App() {
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}
