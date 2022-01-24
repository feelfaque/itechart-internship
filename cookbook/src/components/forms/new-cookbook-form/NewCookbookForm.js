import {closeModalAction} from "../../../redux/actions/modal-window/modalWindowActions";
import {
    resetImageData,
} from "../../../redux/actions/image-storage/imageStorageActions";
import {useDispatch, useSelector} from "react-redux";
import {
    addCookbookDescription, addCookbookImage,
    addCookbookTitle,
    addCookbookUsername, addRecipe, resetCookbookData
} from "../../../redux/actions/new-cookbook/newCookbookActions";
import RecipeTabsList from "../../page-parts/recipe-tabs-list/RecipeTabsList";
import {startCookbookUpload} from "../../../redux/actions/data-upload/dataUploadActions";
import {
    getCurrentUserName,
    getImageUploadError,
    getImageUploadMessage,
    getImageUrl, getNewCookbook,
    getUserRecipes
} from "../../../helpers/helpers";
import NewItemForm from "../new-item-form/NewItemForm";
import RecipesSelect from "./RecipesSelect";

const NewCookbookForm = ({handleFileChange}) => {
    const dispatch = useDispatch();

    const recipes = useSelector(getUserRecipes);
    const userName = useSelector(getCurrentUserName);
    const imageURL = useSelector(getImageUrl);
    const selectedRecipesIDs = useSelector(state => state.newCookbookReducer.recipes);
    const selectedRecipes = recipes.filter(recipe => selectedRecipesIDs.indexOf(recipe.id) !== -1);
    const cookbook = useSelector(getNewCookbook);


    const closeModal = () => {
        dispatch(closeModalAction);
        dispatch(resetCookbookData);
        dispatch(resetImageData);
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
            default:
                return;
        }
    }

    const handleImageUrl = () => {
        dispatch(addCookbookImage(imageURL));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startCookbookUpload(cookbook));
        closeModal();
    }

    return (
        /*<form className="modal-window-form" onChange={handleChange} onSubmit={handleSubmit}>
            <div className="inputs-list">
                <div className="form--column">
                    <label htmlFor="title" className="modal-window-form--label">Cookbook Title<span
                        className="text--yellow">*</span></label>
                    <input required id="title" name="title" className="form-input" type="text" maxLength="12"/>
                </div>
                <input type="file" name="image" required className="file-input cookbook-file-input"
                       onBlur={!imageUploadError && handleImageUrl}/>
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
                            return <option key={recipe.id} id={recipe.id}
                                           value={recipe.id}>{recipe.title}</option>
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
        </form>*/
        <NewItemForm closeModal={closeModal}
                     handleImageUrl={handleImageUrl}
                     onSubmit={handleSubmit}
                     onChange={handleChange}
                     itemSelect={<RecipesSelect recipes={recipes}/>}
                     >
            <RecipeTabsList recipes={selectedRecipes && selectedRecipes}/>
        </NewItemForm>
    );
}

export default NewCookbookForm;