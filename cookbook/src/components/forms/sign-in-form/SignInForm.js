import React from "react";
import {Form} from "react-final-form";
import {Link, useNavigate} from "react-router-dom";
import InputField from "../input-field/InputField";
import { validate} from "./config";
import {useDispatch} from "react-redux";
import {logInStart} from "../../../redux/actions/auth/authActions";

function SignInForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (values) => {
        dispatch(logInStart(values));
        navigate('/');
    }
    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({handleSubmit, valid}) => (
                <form onSubmit={handleSubmit}>
                    <div className="form--column">
                        <label className="form-input--text">Email</label>
                        <InputField name="email" type="email"/>
                    </div>
                    <div className="form--column form-input--margin">
                        <div className="form--row"><label className="form-input--text">Password</label><Link to="/"
                                                                                                             className="form-link--yellow">Forgot
                            password?</Link></div>
                        <InputField name="password" type="password" />
                    </div>
                    <button type="submit" className="button--yellow-background" disabled={!valid}>Sign in</button>
                </form>
            )}
        />
    );
}

export default SignInForm;

