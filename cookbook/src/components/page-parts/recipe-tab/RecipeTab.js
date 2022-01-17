import "./RecipeTab.css";
import {FiMoreHorizontal} from "react-icons/fi";
import TabStatsViews from "../tab-stats-item/TabStatsViews";
import TabStatsComments from "../tab-stats-item/TabStatsComments";
import TabStatsLikes from "../tab-stats-item/TabStatsLikes";


const RecipeTab = ({recipe}) => {
    const addLike = (id) => {console.log(id)};

    return(
        <div className="tab recipe-tab">
            <img src={recipe.imageUrl} alt="recipe cover" className="recipe-tab-photo"/>
            <div className="recipe-tab--column">
                <div className="recipe-tab--space-between">
                    <h3 className="recipe-tab-name">{recipe.title}</h3>
                    <h4 className="tab-text">{recipe.userName}</h4>
                </div>
                <p className="tab-text recipe-tab--margin">{recipe.description}</p>
                <div className="recipe-tab--space-between">
                    <div className="recipe-tab-stats-list">
                        <TabStatsViews num={recipe.views} />
                        <TabStatsLikes num={recipe.likes} onClick={() => addLike(recipe.recipeId)}/>
                        <TabStatsComments num={recipe.comments} />
                    </div>
                    <FiMoreHorizontal className="icon" />
                </div>
            </div>
        </div>
    );
}

export default RecipeTab;