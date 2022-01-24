import classes from "./config";

const Label = ({margin, inputName, text, required, children}) => {
    return (
        <div className={margin ? classes.margin : classes.noMargin}>
            <label htmlFor={inputName} className="modal-window-form--label">{text}{required? <span
                className="text--yellow">*</span>: ""}</label>
            {children}
        </div>
    );
}

export default Label;