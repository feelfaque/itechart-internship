import React from "react";
import "./SignIn.css";
import FormContainer from "../../forms/form-container/FormContainer";
import {SignInPageData} from "./config";
import SignInForm from "../../forms/sign-in-form/SignInForm";

function SignIn () {
    return (
        <div className="signin-page">
            <FormContainer title={SignInPageData.title} subtitle={SignInPageData.subtitle} subtitleLink={SignInPageData.subtitleLink} children={<SignInForm/>}/>
            <div className="signin--background"/>
        </div>
    );
}

export default SignIn;