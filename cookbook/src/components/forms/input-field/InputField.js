import {Field} from "react-final-form";

const InputField = ({name, type }) => {
    return (
        <Field name={name}>
            {({input, meta}) => (
                <div className="form--column">
                    <input type={type} {...input} className="form-input"/>
                    {meta.error && meta.touched &&
                    <span className="form-error--text">{meta.error}</span>}
                </div>
            )}
        </Field>
    );
}

export default InputField;