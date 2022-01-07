import IngredientsList from "../../page-parts/modal/ingredients-list/IngredientsList";
import {
    addIngredient,
    addRecipeDescription, addRecipeDirections, addRecipeImage,
    addRecipeTitle, addRecipeUsername,
    resetRecipeData
} from "../../../redux/actions/new-recipe/newRecipeActions";
import {useDispatch, useSelector} from "react-redux";
import {closeModalAction} from "../../../redux/actions/modal-window/modalWindowActions";
import {
    imageUploadFail, resetImageData,
    startImageUpload
} from "../../../redux/actions/image-storage/imageStorageActions";
import {startRecipeUpload} from "../../../redux/actions/data-upload/dataUploadActions";
import {fetchUserRecipesStart} from "../../../redux/actions/data-fetch/dataFetchActions";

const NewRecipeForm = () => {
    const dispatch = useDispatch();

    const userName = useSelector(state => state.userDataReducer.user.name && state.userDataReducer.user.name);
    const currentUserId = useSelector(state => state.auth.currentUser.uid && state.auth.currentUser.uid);
    const imageUploadError = useSelector(state => state.imageStorageReducer.error && state.imageStorageReducer.error);
    const message = useSelector(state => state.imageStorageReducer.message && state.imageStorageReducer.message);
    const imageURL = useSelector(state => state.imageStorageReducer.imageURL && state.imageStorageReducer.imageURL);
    const newRecipe = useSelector(state => state.newRecipeReducer && state.newRecipeReducer);

    const closeModal = () => {
        dispatch(closeModalAction);
        dispatch(resetRecipeData);
        dispatch(resetImageData);
    }
    const handleAdd = (e) => {
        dispatch(addIngredient(e.target.value));
        e.target.value = "";
    }

    const handleFileChange = (input) => {
        const selectedImage = input.files[0];
        if (!selectedImage) {
            dispatch(imageUploadFail("Image's not selected!"));
            return;
        } if (!selectedImage.type.includes('image')) {
            dispatch(imageUploadFail("Selected file must be an image"));
            return;
        } if (selectedImage.size > 1000000) {
            dispatch(imageUploadFail("Selected image is too big"));
            return;
        }
        dispatch(imageUploadFail(null));
        dispatch(startImageUpload(selectedImage));
    }

    const handleChange = (e) => {
        const input = e.target;
        switch (input.name) {
            case "title":
                dispatch(addRecipeTitle(input.value));
                dispatch(addRecipeUsername(userName));
            break;
            case "image": handleFileChange(e.target);
            break;
            case "description": dispatch(addRecipeDescription(input.value));
            break;
            case "directions": dispatch(addRecipeDirections(input.value));
            break;
            default: return;
        }
    }

    const handleImageUrl = () => {
        dispatch(addRecipeImage(imageURL));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startRecipeUpload(newRecipe));
        dispatch(fetchUserRecipesStart(currentUserId));
        closeModal();
    }

    return (
        <form className="modal-window-form" onChange={handleChange} onSubmit={handleSubmit}>
            <div className="inputs-list">
                <div className="form--column">
                    <label htmlFor="title" className="modal-window-form--label">Recipe Title<span
                        className="text--yellow">*</span></label>
                    <input required id="title" name="title" className="form-input" type="text"/>
                </div>
                            <input type="file" name="image" required className="file-input recipe-file-input" onBlur={!imageUploadError && handleImageUrl}/>
                {imageUploadError} {message}
                            <div className="form--column form-input--margin">
                                <label htmlFor="description" className="modal-window-form--label">Description</label>
                                <textarea name="description" required id="description" className="form-input"/>
                            </div>
                            <div className="form--column  form-input--margin">
                                <label htmlFor="ingredients" className="modal-window-form--label">Ingredients</label>
                                <input name="ingredients" id="ingredients" className="form-input" type="text"
                                       onBlur={handleAdd}/>
                            </div>
                    </div>
                        <IngredientsList/>
                <div className="form--column form-input--margin">
                    <label htmlFor="directions" className="modal-window-form--label">Directions</label>
                    <textarea name="directions" required id="description" className="form-input"/>
                </div>
                <div className="buttons-list">
                    <button className="button button--yellow-border button--high" onClick={closeModal}>Cancel</button>
                    <button type="submit" className="button button--yellow-background button--high">Confirm
                    </button>
                </div>
        </form>
);
}

export default NewRecipeForm;