import {Form } from "react-final-form";
import { Link, useNavigate } from "react-router-dom";
import { useSignup } from "../../../hooks/useSignup";
import { validate } from "./config";
import InputField from "../input-field/InputField";

function SignUpForm() {
    const {signup, error} = useSignup();
    const navigate = useNavigate();
    const onSubmit = (values) => {
        const email = values.email;
        const password = values.password;
        signup(email, password);
        navigate("/");
    }
    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                    <div className="form--column">
                        <label className="form-input--text">Email</label>
                        <InputField name="email" type="email" />
                    </div>
                    <div className="form--column form-input--margin">
                        <div className="form--row"><label className="form-input--text">Password</label><Link to="/" className="form-link--yellow">Forgot password?</Link></div>
                        <InputField name="password" type="password" />
                    </div>
                    <div className="form--column  form-input--margin">
                        <label className="form-input--text">Confirm Password</label>
                        <InputField name="confirm" type="password" />
                    </div>
                    <button type="submit" className="form-submit-button" disabled={submitting}>Sign up</button>
                    {error && <p>error</p>}
                </form>
            )}
        />
    );
}

export default SignUpForm;