import "./ModalWindow.css";
import {Form} from "react-final-form";
import {AiOutlineClose} from "react-icons/ai";
import ModalOverlay from "./ModalOverlay";
import InputField from "../../forms/input-field/InputField";
import {Field} from "react-final-form";

const ModalWindow = ({titleText}) => {
    const onSubmit = (values) => {console.log(values)};
    return(

        <div className="modal-window--container">
            <ModalOverlay />

            <div className="modal">
                <button className="close-modal-button">
                    <AiOutlineClose className="modal-close-button--icon"/>
                </button>

                <div className="modal-window">
                    <h2 className="modal-window-title"> Create new {titleText}</h2>

                    <Form
                        onSubmit={onSubmit}
                            render={({handleSubmit, form, submitting, pristine, values}) => (
                        <form onSubmit={handleSubmit} className="modal-window-form">

                            <div className="inputs-list">
                                <div className="form--column">
                                    <label className="modal-window-form--label">{titleText} Title<span className="text--yellow">*</span> </label>
                                    <InputField name="title" type="text" />
                                </div>

                                <button className="button button--yellow-background button--high">Upload {titleText} Image</button>

                                <div className="form--column form-input--margin">
                                    <label className="modal-window-form--label">Description</label>
                                    <Field name="description" component="textarea" className="form-input"/>
                                </div>

                                <div className="form--column  form-input--margin">
                                    <label className="modal-window-form--label">{titleText === "Recipe"? "Ingredients":"Recipes"}</label>
                                    <InputField name={titleText === "Recipe"? "ingredients":"recipes"} type="text" />
                                </div>
                            </div>

                            <div className="button-list">
                                <button className="button button--yellow-border button--high">Cancel</button>
                                <button type="submit" className="button button--yellow-background button--high" disabled={submitting}>Confirm</button>
                            </div>
                        </form>
                    )}
                    />

                </div>
            </div>
        </div>
    );
}

export default ModalWindow;