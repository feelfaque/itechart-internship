import "./RecipeTabsList.css";
import RecipeTab from "../recipe-tab/RecipeTab";

const RecipeTabsList = ({recipes}) => {
    return<>
        <div className="recipe-tabs-list">
            {recipes && recipes.map((recipe, i) => {
                return <RecipeTab key={i} recipe={recipe} />
            })}
        </div>
    </>;
}

export default RecipeTabsList;