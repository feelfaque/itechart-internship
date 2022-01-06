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
import {useEffect} from "react";
import {fetchUserRecipesStart} from "../../../redux/actions/data-fetch/dataFetchActions";
import NewCookbookForm from "../../forms/new-cookbook-form/newCookbookForm";

const Profile = () => {
    const dispatch = useDispatch();
    const currentTabs = useSelector((state) => state.profileNavReducer.currentTabs);
    const currentModal = useSelector((state) => state.modalWindowReducer.currentModal);
    const currentUserId = useSelector(state => state.auth.currentUser.uid && state.auth.currentUser.uid);
    const recipes = useSelector(state => state.dataFetchReducer.recipes.userRecipes && state.dataFetchReducer.recipes.userRecipes);

    const fetchUserRecipes = () => {
        dispatch(fetchUserRecipesStart(currentUserId));
    }
    useEffect(fetchUserRecipes, [dispatch, fetchUserRecipes, currentUserId]);

    return (
        <>
            <Layout>
                <div className="profile">
                    <ProfileInfo/>
                    <ProfileNav/>
                    {currentTabs === "cookbooks" ? <CookbookTabsList/> : (currentTabs === "recipes" ?
                        <RecipeTabsList recipes={recipes}/> : <ProfileEdit/>)}
                </div>
            </Layout>
            {currentModal === "new-cookbook-reducer" ? <ModalWindow titleText="CookBook" children={<NewCookbookForm/>}/> : (currentModal === "new-recipe" ?
                <ModalWindow titleText="Recipe" children={<NewRecipeForm />}/> : "")
            } }
        </>
    );
}

export default Profile;