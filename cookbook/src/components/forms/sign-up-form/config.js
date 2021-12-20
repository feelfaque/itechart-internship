const emailCheck = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{6,16}$/;

export const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = "Email is required";
    }
    if (!emailCheck.test(values.email)) {
        errors.email = "Email isn't valid";
    }
    if (!values.password) {
        errors.password = "Password is required";
    }
    if (!passwordCheck.test(values.password)) {
        errors.password = "Password has to be 6 to 16 characters long and include letters and numbers";
    }
    if (!values.confirm) {
        errors.confirm = "Password confirmation is required";
    } else if (values.confirm !== values.password) {
        errors.confirm = "Passwords must match";
    }
    return errors;
}
