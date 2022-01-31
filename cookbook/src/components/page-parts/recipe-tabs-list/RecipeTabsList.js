import "./RecipeTabsList.css";
import RecipeTab from "../recipe-tab/RecipeTab";

const RecipeTabsList = ({recipes}) => {

    return<>
        <div className="recipe-tabs-list">
            {recipes && recipes.map((recipe) => {
                return <RecipeTab key={recipe.id} recipe={recipe}/>
            })}
        </div>
    </>;
}

export default RecipeTabsList;