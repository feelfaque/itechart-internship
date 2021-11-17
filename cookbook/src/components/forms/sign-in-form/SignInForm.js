import {Form, Field} from "react-final-form";
import {Link} from "react-router-dom";

function SignInForm() {
    const onSubmit = () => {
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
                return errors;
            }}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                    <div className="form--column">
                        <label className="form-input--text">Email</label>
                        <Field name="email">
                            {({input, meta}) => (
                                <div className="form--column">
                                    <input type="email" {...input}
                                           className="form-input"/>
                                    {meta.error && meta.touched &&
                                    <span className="form-error--text">{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className="form--column form-input--margin">
                        <div className="form--row"><label className="form-input--text">Password</label><Link to="/"
                                                                                                             className="form-link--yellow">Forgot
                            password?</Link></div>
                        <Field name="password">
                            {({input, meta}) => (
                                <div className="form--column">
                                    <input type="password" {...input}
                                           className="form-input"/>
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

export default SignInForm;

