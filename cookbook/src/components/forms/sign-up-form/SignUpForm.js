import React from "react";

function SignUpForm () {
    return (
        <form action="" method="">
            <label className="form--column form-input--text">
                Email
                <input className="form-input" type="email" name="email"/>
            </label>
            <label className="form--column form-input--text">
                <div className="form--row"><span>Password</span> <span className="form-link--yellow">Forgot password?</span></div>
                <input className="form-input" type="password" name="password"/>
            </label>
            <label className="form--column form-input--text">
                Confirm Password
                <input className="form-input" type="password" name="password"/>
            </label>
            <input className="form-submit-button" type="submit" value="Sign up"/>
        </form>
    );
}

export default SignUpForm;