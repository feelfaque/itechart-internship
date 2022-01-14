import "./ContentPage.css";
import Layout from "../../page-parts/layout/Layout";
import Filter from "../../page-parts/filter/Filter";
import RecipeTabsList from "../../page-parts/recipe-tabs-list/RecipeTabsList";
import {useSelector} from "react-redux";
import ContentPageNav from "./content-page-nav/ContentPageNav";
import CookbookTabsList from "../../page-parts/cookbook-tabs-list/CookbookTabsList";

const ContentPage = () => {
    const currentLink = useSelector(state => state.pageNavReducer.currentContentPageTabs && state.pageNavReducer.currentContentPageTabs);
    const recipes = useSelector(state => state.dataFetchReducer.allRecipes && state.dataFetchReducer.allRecipes);
    const cookbooks = useSelector(state => state.dataFetchReducer.allCookbooks && state.dataFetchReducer.allCookbooks);

    return (
        <Layout>
            <div className="wrapper content-page">
                <Filter/>
                <div className="content-page-container">
                    <ContentPageNav/>
                    {currentLink === "recipes" ?
                        <RecipeTabsList recipes={recipes}/> :
                        <CookbookTabsList cookbooks={cookbooks}/>}
                </div>
            </div>
        </Layout>
    );
}

export default ContentPage;