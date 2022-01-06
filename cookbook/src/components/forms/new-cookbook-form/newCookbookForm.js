import {closeModalAction} from "../../../redux/actions/modal-window/modalWindowActions";
import {resetRecipeData} from "../../../redux/actions/new-recipe/newRecipeActions";
import {
    imageUploadFail,
    resetImageData,
    startImageUpload
} from "../../../redux/actions/image-storage/imageStorageActions";
import {useDispatch, useSelector} from "react-redux";
import {
    addCookbookDescription, addCookbookImage,
    addCookbookTitle,
    addCookbookUsername, addRecipe
} from "../../../redux/actions/new-cookbook/newCookbookActions";
import RecipeTabsList from "../../page-parts/recipe-tabs-list/RecipeTabsList";

const NewCookbookForm = () => {
    const dispatch = useDispatch();

    const recipes = useSelector(state => state.dataFetchReducer.recipes.userRecipes);
    const userName = useSelector(state => state.userDataReducer.user.name && state.userDataReducer.user.name);
    const imageUploadError = useSelector(state => state.imageStorageReducer.error && state.imageStorageReducer.error);
    const message = useSelector(state => state.imageStorageReducer.message && state.imageStorageReducer.message);
    const imageURL = useSelector(state => state.imageStorageReducer.imageURL && state.imageStorageReducer.imageURL);
    const selectedRecipesIDs = useSelector(state => state.newCookbookReducer.recipes);
    const selectedRecipes = recipes.filter(recipe => selectedRecipesIDs.indexOf(recipe.recipeId) !== -1);

    const closeModal = () => {
        dispatch(closeModalAction);
        dispatch(resetRecipeData);
        dispatch(resetImageData);
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
                dispatch(addCookbookTitle(input.value));
                dispatch(addCookbookUsername(userName));
                break;
            case "image":
                handleFileChange(e.target);
                break;
            case "description":
                dispatch(addCookbookDescription(input.value));
                break;
            case "recipes":
                dispatch(addRecipe(input.value));
                break;
            default: return;
        }
    }

    const handleImageUrl = () => {
        dispatch(addCookbookImage(imageURL));
    }
    return (
        <form className="modal-window-form" onChange={handleChange}>
            <div className="inputs-list">
                <div className="form--column">
                    <label htmlFor="title" className="modal-window-form--label">Cookbook Title<span
                        className="text--yellow">*</span></label>
                    <input required id="title" name="title" className="form-input" type="text"/>
                </div>
                <input type="file" name="image" required className="file-input cookbook-file-input" onBlur={!imageUploadError && handleImageUrl}/>
                {imageUploadError} {message}
                <div className="form--column form-input--margin">
                    <label htmlFor="description" className="modal-window-form--label">Description</label>
                    <textarea name="description" required id="description" className="form-input"/>
                </div>
                <div className="form--column form-input--margin">
                    <label htmlFor="description" className="modal-window-form--label">Recipes</label>
                    <select name="recipes" required id="recipes" className="form-input">
                        <option value=""> </option>
                        {recipes && recipes.map(recipe => {
                            return <option key={recipe.recipeId} id={recipe.recipeId} value={recipe.recipeId}>{recipe.title}</option>
                        })}
                    </select>
                </div>
            </div>
            <RecipeTabsList recipes={selectedRecipes && selectedRecipes}/>

            <div className="buttons-list">
                <button className="button button--yellow-border button--high" onClick={closeModal}>Cancel</button>
                <button type="submit" className="button button--yellow-background button--high">Confirm
                </button>
            </div>
        </form>
    );
}

export default NewCookbookForm;