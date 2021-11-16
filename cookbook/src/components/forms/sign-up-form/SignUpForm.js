import {Form, Field} from "react-final-form";

function SignUpForm() {
    const onSubmit = (e) => {

    }

    const formValidation = {
        email: false,
        password: false,
        confirmedPassword: false
    }

    const validateForm = (e) => {

    }
    return (
        <Form
            onSubmit={onSubmit}
            validate={(values) => {
                const errors = {};
                if (!values.email) {
                    errors.email = "Email is required";
                }
                if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
                    errors.email = "Email isn't valid";
                }
                if (!values.password) {
                    errors.password = "Password is required";
                }
                if (!values.confirm) {
                    errors.confirm = "Password confirmation is required";
                } else if (values.confirm !== values.password) {
                    errors.confirm = "Passwords must match";
                }
                return errors;
            }}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                    <div className="form--column">
                        <label className="form-input--text">Email</label>
                        <Field name="email">
                            {({input, meta}) => (
                                <div className="form--column">
                                    <input type="email" {...input} className="form-input"/>
                                    {meta.error && meta.touched &&
                                    <span className="form-error--text">{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className="form--column form-input--margin">
                        <label className="form-input--text">Password</label>
                        <Field name="password">
                            {({input, meta}) => (
                                <div className="form--column">
                                    <input type="password" {...input} className="form-input"/>
                                    {meta.error && meta.touched &&
                                    <span className="form-error--text">{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className="form--column  form-input--margin">
                        <label className="form-input--text">Confirm Password</label>
                        <Field name="confirm">
                            {({input, meta}) => (
                                <div className="form--column">
                                    <input type="password" {...input} className="form-input"/>
                                    {meta.error && meta.touched &&
                                    <span className="form-error--text">{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <button type="submit" className="form-submit-button" disabled={submitting}>Sign up</button>
                </form>
            )}
        />
    );
}

export default SignUpForm;