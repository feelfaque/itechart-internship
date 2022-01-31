import Label from "../labels/Label";
import {useSelector} from "react-redux";
import {getImageUploadError, getImageUploadMessage} from "../../../helpers/helpers";


const NewItemForm = ({children, onChange, onSubmit, handleImageUrl, itemSelect, closeModal}) => {
    const imageUploadError = useSelector(getImageUploadError);
    const message = useSelector(getImageUploadMessage);

    return(
        <form className="modal-window-form" onChange={onChange} onSubmit={onSubmit}>
            <div className="inputs-list">
                <Label inputName="title" text="Recipe Title" required>
                    <input required id="title" name="title" className="form-input" type="text"/>
                </Label>
                <input type="file" name="image" required className="file-input recipe-file-input"
                       onBlur={!imageUploadError && handleImageUrl}/>
                {imageUploadError} {message}
                <Label margin text="Description" inputName="description">
                    <textarea name="description" required id="description" className="form-input"/>
                </Label>
                {itemSelect}
            </div>
            {children}
            <div className="buttons-list">
                <button className="button button--yellow-border button--high" onClick={closeModal}>Cancel</button>
                <button type="submit" className="button button--yellow-background button--high">Confirm
                </button>
            </div>
        </form>
    );
}

export default NewItemForm;