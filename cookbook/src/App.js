import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Home from "./components/pages/home/Home";
import SignUp from "./components/pages/sign-up/SignUp";
import SignIn from "./components/pages/sign-in/SignIn";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path"/signup">
                <SignUp />
            </Route>
            <Route path="/login">
                <SignIn />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}
