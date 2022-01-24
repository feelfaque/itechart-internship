import "./ContentPage.css";
import Layout from "../../page-parts/layout/Layout";
import Filter from "../../page-parts/filter/Filter";
import RecipeTabsList from "../../page-parts/recipe-tabs-list/RecipeTabsList";
import {useSelector} from "react-redux";
import ContentPageNav from "./content-page-nav/ContentPageNav";
import CookbookTabsList from "../../page-parts/cookbook-tabs-list/CookbookTabsList";
import RecipeModal from "../../page-parts/modal/RecipeModal";
import CookbookModal from "../../page-parts/modal/CookbookModal";
import NewCookbookForm from "../../forms/new-cookbook-form/NewCookbookForm";
import ModalWindow from "../../page-parts/modal/ModalWindow";
import {
    getAllCookbooks,
    getAllRecipes,
    getCurrentContentPageTabs
} from "../../../helpers/helpers";

const ContentPage = ({handleFileChange, currentModal, selectedId}) => {
    const currentLink = useSelector(getCurrentContentPageTabs);
    const recipes = useSelector(getAllRecipes);
    const cookbooks = useSelector(getAllCookbooks);
    const selectedRecipe = (currentModal === "recipe" && recipes.find(item => item.id === selectedId));
    const selectedCookbook = (currentModal === "cookbook" && cookbooks.find(item => item.id === selectedId));

    return (
        <>
            <Layout>
                <div className="wrapper content-page">
                    <Filter/>
                    <div className="content-page-container">
                        <ContentPageNav/>
                        {currentLink === "recipes" ?
                            <RecipeTabsList recipes={recipes && recipes} /> :
                            <CookbookTabsList cookbooks={cookbooks && cookbooks}/>}
                    </div>
                </div>
            </Layout>
            {currentModal === "recipe" && <RecipeModal recipe={selectedRecipe}/>}
            {currentModal === "cookbook" && <CookbookModal cookbook={selectedCookbook}/>}
            {currentModal === "new-cookbook" && <ModalWindow titleText="CookBook" children={<NewCookbookForm
                handleFileChange={handleFileChange}/>}/>}
        </>
    );
}

export default ContentPage;