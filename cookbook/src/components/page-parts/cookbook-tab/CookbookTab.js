import "./CookbookTab.css";
import TabStatsViews from "../tab-stats-item/TabStatsViews";
import TabStatsLikes from "../tab-stats-item/TabStatsLikes";
import TabStatsComments from "../tab-stats-item/TabStatsComments";
import {useDispatch} from "react-redux";
import {openCookbookModal} from "../../../redux/actions/modal-window/modalWindowActions";
import {updateCookbookLikesStart} from "../../../redux/actions/stats/statsActions";

const CookbookTab = ({cookbook}) => {
    const dispatch = useDispatch();

    const addLike = (id) => {
        dispatch(updateCookbookLikesStart(id));
    }

    const openCookbook = (id) => {
        dispatch(openCookbookModal(id));
    }
    return (
        <div className="tab cookbook-tab" onDoubleClick={() => openCookbook(cookbook.id)}>
            <TabStatsViews num={cookbook.views}/>
            <img src={cookbook.imageUrl} alt="cookbook cover" className="cookbook-tab-photo"/>
            <div className="cookbook-tab-title">
                <h3 className="cookbook-tab-name">{cookbook.title}</h3>
                <h4 className="tab-text">{cookbook.userName}</h4>
            </div>
            <p className="tab-text cookbook-tab--margin cookbook-description">{cookbook.description}</p>
            <div className="cookbook-tab-stats-list">
                <TabStatsLikes num={cookbook.likes.length} onClick={() => addLike(cookbook.id)}/>
                <TabStatsComments num={cookbook.comments.length}/>
            </div>
        </div>
    );
}

export default CookbookTab;