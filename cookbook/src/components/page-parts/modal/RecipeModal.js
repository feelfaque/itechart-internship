import ModalOverlay from "./ModalOverlay";
import {AiOutlineClose} from "react-icons/ai";
import {closeModalAction} from "../../../redux/actions/modal-window/modalWindowActions";
import {useDispatch} from "react-redux";
import TabStatsViews from "../tab-stats-item/TabStatsViews";
import TabStatsLikes from "../tab-stats-item/TabStatsLikes";
import TabStatsComments from "../tab-stats-item/TabStatsComments";
import {useEffect} from "react";
import {updateRecipeViewsStart} from "../../../redux/actions/stats/statsActions";

const RecipeModal = ({recipe}) => {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(closeModalAction);
    }

    const addLike = (id) => {console.log(id)};

    const addViews = () => {
        dispatch(updateRecipeViewsStart(recipe.id));
    }

    useEffect(addViews, [dispatch, recipe.id]);
    return (
        <div className="modal-window--container">
            <ModalOverlay />
            <div className="modal">
                <button className="close-modal-button" onClick={closeModal}>
                    <AiOutlineClose className="modal-close-button--icon"/>
                </button>

                <div className="modal-window">
                    <div className="content-modal--flex">
                        <img src={recipe.imageUrl} alt={recipe.title} />
                        <div className="recipe-info">
                            <h2 className="modal-window-title">{recipe.title}</h2>
                            <h3 className="user-name">{recipe.userName}</h3>
                            <div className="modal-info-container">
                                <h3 className="modal-window-subtitle">Description</h3>
                                <p>{recipe.description}</p>
                            </div>
                            <div className="content-modal--flex">
                                <div className="modal-info-container">
                                    <h3 className="modal-window-subtitle">Directions</h3>
                                    <p>{recipe.directions}</p>
                                </div>
                                <div className="modal-info-container">
                                    <h3 className="modal-window-subtitle">Ingredients</h3>
                                    <ul>
                                        {recipe.ingredients.map((item, i) => {
                                            return <li className="list-item" key={i}>{item}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="recipe-tab-stats-list">
                                <TabStatsViews num={recipe.views} />
                                <TabStatsLikes num={recipe.likes.length} onClick={() => addLike(recipe.id)}/>
                                <TabStatsComments num={recipe.comments.length} />
                            </div>
                        </div>
                    </div>

                    <h3 className="modal-window-subtitle"> Comments ({recipe.comments.length})</h3>
                </div>
            </div>
        </div>
    );
}

export default RecipeModal;