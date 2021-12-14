import "./RecipeTabsList.css";
import RecipeTab from "../recipe-tab/RecipeTab";

const RecipeTabsList = () => {
    return<>
        <div className="wrapper recipe-tabs-list">
            <RecipeTab />
            <RecipeTab />
            <RecipeTab />
            <RecipeTab />
            <RecipeTab />
            <RecipeTab />
        </div>
    </>;
}

export default RecipeTabsList;