import Layout from "../../page-parts/layout/Layout";
import RecipeTabsList from "../../page-parts/recipe-tabs-list/RecipeTabsList";

function Home () {
    return(
        <>
            <Layout>
                <RecipeTabsList />
            </Layout>
        </>
    );
}

export default Home;