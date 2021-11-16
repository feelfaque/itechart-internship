import './SignUp.css';
import {SignUpFormData} from "./config";
import FormContainer from "../../forms/form-container/FormContainer";
import SignUpForm from "../../forms/sign-up-form/SignUpForm";

function SignUp() {
    return (
        <div className="signup-page">
            <div className="signup--background"/>
            <FormContainer title={SignUpFormData.title} subtitle={SignUpFormData.subtitle}
                           subtitleLink={SignUpFormData.subtitleLink} children={<SignUpForm/>}/>
        </div>
    );
}

export default SignUp;