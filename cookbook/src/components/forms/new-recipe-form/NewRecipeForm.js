import IngredientsList from "../../page-parts/modal/ingredients-list/IngredientsList";
import {
    addIngredient,
    addRecipeDescription, addRecipeDirections, addRecipeImage,
    addRecipeTitle, addRecipeUsername,
    resetRecipeData
} from "../../../redux/actions/new-recipe/newRecipeActions";
import {useDispatch, useSelector} from "react-redux";
import {closeModalAction} from "../../../redux/actions/modal-window/modalWindowActions";
import {resetImageData} from "../../../redux/actions/image-storage/imageStorageActions";
import {startRecipeUpload} from "../../../redux/actions/data-upload/dataUploadActions";
import {
    getCurrentUserName,
    getImageUrl,
    getNewRecipe
} from "../../../helpers/helpers";
import Label from "../labels/Label";
import NewItemForm from "../new-item-form/NewItemForm";
import IngredientsSelect from "./IngredientsSelect";

const NewRecipeForm = ({handleFileChange}) => {
    const dispatch = useDispatch();

    const userName = useSelector(getCurrentUserName);
    const imageURL = useSelector(getImageUrl);
    const newRecipe = useSelector(getNewRecipe);

    const closeModal = () => {
        dispatch(closeModalAction);
        dispatch(resetRecipeData);
        dispatch(resetImageData);
    }
    const handleAdd = (e) => {
        dispatch(addIngredient(e.target.value));
        e.target.value = "";
    }

    const handleChange = (e) => {
        const input = e.target;
        switch (input.name) {
            case "title":
                dispatch(addRecipeTitle(input.value));
                dispatch(addRecipeUsername(userName));
                break;
            case "image":
                handleFileChange(e.target);
                break;
            case "description":
                dispatch(addRecipeDescription(input.value));
                break;
            case "directions":
                dispatch(addRecipeDirections(input.value));
                break;
            default:
                return;
        }
    }

    const handleImageUrl = () => {
        dispatch(addRecipeImage(imageURL));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startRecipeUpload(newRecipe));
        closeModal();
    }


    return (
        /*<form className="modal-window-form" onChange={handleChange} onSubmit={handleSubmit}>
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
                <Label inputName="ingredients" text="Ingredients" margin>
                    <input name="ingredients" id="ingredients" className="form-input" type="text"
                           onBlur={handleAdd}/>
                </Label>
            </div>
            <IngredientsList/>
            <Label inputName="directions" text="Directions" margin>
                <textarea name="directions" required id="description" className="form-input"/>
            </Label>
            <div className="buttons-list">
                <button className="button button--yellow-border button--high" onClick={closeModal}>Cancel</button>
                <button type="submit" className="button button--yellow-background button--high">Confirm
                </button>
            </div>
        </form>*/
        <NewItemForm onChange={handleChange}
                     onSubmit={handleSubmit}
                     handleImageUrl={handleImageUrl}
                     itemSelect={<IngredientsSelect handleAdd={handleAdd}/>}
                     closeModal={closeModal}
        >
            <IngredientsList/>
            <Label inputName="directions" text="Directions" margin>
                <textarea name="directions" required id="description" className="form-input"/>
            </Label>
        </NewItemForm>
    );
}

export default NewRecipeForm;