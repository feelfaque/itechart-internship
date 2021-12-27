import "./RecipeTabsList.css";
import {useSelector} from "react-redux";
import RecipeTab from "../recipe-tab/RecipeTab";

const RecipeTabsList = () => {
    const recipes = useSelector(state => state.dataFetchReducer.recipes.userRecipes && state.dataFetchReducer.recipes.userRecipes);
    return<>
        <div className="wrapper recipe-tabs-list">
            {recipes && recipes.map((recipe, i) => {
                return <RecipeTab key={i} recipe={recipe} />
            })}
        </div>
    </>;
}

export default RecipeTabsList;