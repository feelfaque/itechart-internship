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
import RecipeModal from "../../page-parts/modal/RecipeModal";
import CookbookModal from "../../page-parts/modal/CookbookModal";
import {
    getCurrentTabs,
    getUserCookbooks,
    getUserRecipes
} from "../../../helpers/helpers";

const Profile = ({handleFileChange, currentModal,  selectedId}) => {
    const currentTabs = useSelector(getCurrentTabs);
    const recipes = useSelector(getUserRecipes);
    const cookbooks = useSelector(getUserCookbooks);
    const selectedRecipe = (currentModal === "recipe" && recipes.find(item => item.id === selectedId));
    const selectedCookbook = (currentModal === "cookbook" && cookbooks.find(item => item.id === selectedId));


    return (
        <>
            <Layout>
                <div className="profile">
                    <ProfileInfo handleFileChange={handleFileChange} currentTabs={currentTabs}/>
                    <ProfileNav/>
                    <div className="wrapper">
                        {currentTabs === "cookbooks" ?
                            <CookbookTabsList cookbooks={cookbooks && cookbooks}/> : (currentTabs === "recipes" ?
                                <RecipeTabsList recipes={recipes && recipes}/> : <ProfileEdit/>)}
                    </div>
                </div>
            </Layout>

            {currentModal === "new-cookbook" && <ModalWindow titleText="CookBook" children={<NewCookbookForm
                handleFileChange={handleFileChange}/>}/>}
            {currentModal === "new-recipe" &&
            <ModalWindow titleText="Recipe" children={<NewRecipeForm handleFileChange={handleFileChange}/>}/>}
            {currentModal === "recipe" && <RecipeModal recipe={selectedRecipe}/>}
            {currentModal === "cookbook" && <CookbookModal cookbook={selectedCookbook}/>}

        </>
    );
}

export default Profile;