import "./ContentPage.css";
import Layout from "../../page-parts/layout/Layout";
import Filter from "../../page-parts/filter/Filter";
import RecipeTabsList from "../../page-parts/recipe-tabs-list/RecipeTabsList";
import {useSelector} from "react-redux";
import ContentPageNav from "./content-page-nav/ContentPageNav";
import CookbookTabsList from "../../page-parts/cookbook-tabs-list/CookbookTabsList";
import RecipeModal from "../../page-parts/modal/RecipeModal";
import CookbookModal from "../../page-parts/modal/CookbookModal";

const ContentPage = () => {
    const currentLink = useSelector(state => state.pageNavReducer.currentContentPageTabs && state.pageNavReducer.currentContentPageTabs);
    const recipes = useSelector(state => state.dataFetchReducer.allRecipes && state.dataFetchReducer.allRecipes);
    const cookbooks = useSelector(state => state.dataFetchReducer.allCookbooks && state.dataFetchReducer.allCookbooks);
    const currentModal = useSelector(state => state.modalWindowReducer.currentModal);
    const selectedId = useSelector(state => state.modalWindowReducer.contentId);
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
                            <RecipeTabsList recipes={recipes} /> :
                            <CookbookTabsList cookbooks={cookbooks}/>}
                    </div>
                </div>
            </Layout>
            {currentModal === "recipe" && <RecipeModal recipe={selectedRecipe}/>}
            {currentModal === "cookbook" && <CookbookModal cookbook={selectedCookbook}/>}
        </>
    );
}

export default ContentPage;