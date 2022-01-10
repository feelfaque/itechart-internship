import "./Profile.css";
import {useDispatch, useSelector} from "react-redux";
import ProfileInfo from "./profile-info/ProfileInfo";
import ProfileNav from "./profile-nav/ProfileNav";
import RecipeTabsList from "../../page-parts/recipe-tabs-list/RecipeTabsList";
import CookbookTabsList from "../../page-parts/cookbook-tabs-list/CookbookTabsList";
import Layout from "../../page-parts/layout/Layout";
import ProfileEdit from "./profile-edit/ProfileEdit";
import ModalWindow from "../../page-parts/modal/ModalWindow";
import NewRecipeForm from "../../forms/new-recipe-form/NewRecipeForm";
import NewCookbookForm from "../../forms/new-cookbook-form/newCookbookForm";
import {imageUploadFail, startImageUpload} from "../../../redux/actions/image-storage/imageStorageActions";

const Profile = () => {
    const dispatch = useDispatch();
    const currentTabs = useSelector((state) => state.profileNavReducer.currentTabs);
    const currentModal = useSelector((state) => state.modalWindowReducer.currentModal);
    const recipes = useSelector(state => state.dataFetchReducer.recipes.userRecipes && state.dataFetchReducer.recipes.userRecipes);
    const cookbooks = useSelector(state => state.dataFetchReducer.cookbooks.userCookbooks && state.dataFetchReducer.cookbooks.userCookbooks);

    const handleFileChange = (input) => {
        const selectedImage = input.files[0];
        if (!selectedImage) {
            dispatch(imageUploadFail("Image's not selected!"));
            return;
        }
        if (!selectedImage.type.includes('image')) {
            dispatch(imageUploadFail("Selected file must be an image"));
            return;
        }
        if (selectedImage.size > 1000000) {
            dispatch(imageUploadFail("Selected image is too big"));
            return;
        }
        dispatch(imageUploadFail(null));
        dispatch(startImageUpload(selectedImage));
    }

    return (
        <>
            <Layout>
                <div className="profile">
                    <ProfileInfo/>
                    <ProfileNav/>
                    <div className="wrapper">
                        {currentTabs === "cookbooks" ? <CookbookTabsList cookbooks={cookbooks}/> : (currentTabs === "recipes" ?
                            <RecipeTabsList recipes={recipes}/> : <ProfileEdit/>)}
                    </div>
                </div>
            </Layout>
            {currentModal === "new-cookbook-reducer" ? <ModalWindow titleText="CookBook" children={<NewCookbookForm handleFileChange={handleFileChange}/>}/> : (currentModal === "new-recipe" ?
                <ModalWindow titleText="Recipe" children={<NewRecipeForm handleFileChange={handleFileChange}/>}/> : "")
            } }
        </>
    );
}

export default Profile;