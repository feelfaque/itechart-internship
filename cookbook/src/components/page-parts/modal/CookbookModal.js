import ModalOverlay from "./ModalOverlay";
import {AiOutlineClose} from "react-icons/ai";
import {closeModalAction} from "../../../redux/actions/modal-window/modalWindowActions";
import {useDispatch, useSelector} from "react-redux";
import TabStatsLikes from "../tab-stats-item/TabStatsLikes";
import TabStatsComments from "../tab-stats-item/TabStatsComments";
import {useEffect} from "react";
import RecipeTabsList from "../recipe-tabs-list/RecipeTabsList";
import {updateCookbookViewsStart} from "../../../redux/actions/stats/statsActions";

const CookbookModal = ({cookbook}) => {
    const dispatch = useDispatch();
    const recipes = useSelector(state => state.dataFetchReducer.allRecipes.filter(item => cookbook.recipes.indexOf(item.id) !== -1));

    const closeModal = () => {
        dispatch(closeModalAction);
    }

    const addLike = (id) => {
        console.log(id)
    };

    const addViews = () => {
        dispatch(updateCookbookViewsStart(cookbook.id));
    }
    useEffect(addViews, [cookbook.id, dispatch]);

    return (
        <div className="modal-window--container">
            <ModalOverlay/>
            <div className="modal">
                <button className="close-modal-button" onClick={closeModal}>
                    <AiOutlineClose className="modal-close-button--icon"/>
                </button>

                <div className="modal-window">
                    <h2 className="modal-window-title">{cookbook.title}</h2>
                    <h3 className="user-name">{cookbook.userName}</h3>
                    <div className="content-modal--flex">
                        <img src={cookbook.imageUrl} alt={cookbook.title}/>
                        <div className="modal-info-container">
                            <h3 className="modal-window-subtitle">Description</h3>
                            <p>{cookbook.description}</p>
                        </div>
                    </div>
                    <div className="recipe-tab-stats-list">
                        <TabStatsLikes num={cookbook.likes.length} onClick={() => addLike(cookbook.id)}/>
                        <TabStatsComments num={cookbook.comments.length}/>
                    </div>
                    <h3 className="modal-window-subtitle">Recipes</h3>
                    <RecipeTabsList recipes={recipes} />
                    <h3 className="modal-window-subtitle"> Comments ({cookbook.comments.length})</h3>
                </div>
            </div>
        </div>
    );
}

export default CookbookModal;