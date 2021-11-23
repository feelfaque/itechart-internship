export const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = "Email is required";
    }
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
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
}
