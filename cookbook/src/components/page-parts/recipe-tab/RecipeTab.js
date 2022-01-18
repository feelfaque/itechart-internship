import "./RecipeTab.css";
import {FiMoreHorizontal} from "react-icons/fi";
import TabStatsViews from "../tab-stats-item/TabStatsViews";
import TabStatsComments from "../tab-stats-item/TabStatsComments";
import TabStatsLikes from "../tab-stats-item/TabStatsLikes";
import {useDispatch} from "react-redux";
import {openRecipeModal} from "../../../redux/actions/modal-window/modalWindowActions";


const RecipeTab = ({recipe}) => {
    const dispatch = useDispatch();

    const addLike = (id) => {console.log(id)};

    const openRecipe = (id) => {
        dispatch(openRecipeModal(id));
    }
    return(
        <div className="tab recipe-tab" onClick={() => openRecipe(recipe.id)}>
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
                        <TabStatsLikes num={recipe.likes.length} onClick={() => addLike(recipe.id)}/>
                        <TabStatsComments num={recipe.comments.length} />
                    </div>
                    <FiMoreHorizontal className="icon" />
                </div>
            </div>
        </div>
    );
}

export default RecipeTab;