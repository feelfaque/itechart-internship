import "./CookbookTab.css";
import TabStatsViews from "../tab-stats-item/TabStatsViews";
import TabStatsLikes from "../tab-stats-item/TabStatsLikes";
import TabStatsComments from "../tab-stats-item/TabStatsComments";

const CookbookTab = ({cookbook}) => {
    return (
        <div className="tab cookbook-tab">
            <TabStatsViews num={cookbook.views}/>
            <img src={cookbook.imageUrl} alt="cookbook cover" className="cookbook-tab-photo"/>
            <div className="cookbook-tab-title">
                <h3 className="cookbook-tab-name">{cookbook.title}</h3>
                <h4 className="tab-text">{cookbook.userName}</h4>
            </div>
            <p className="tab-text cookbook-tab--margin cookbook-description">{cookbook.description}</p>
            <div className="cookbook-tab-stats-list">
                <TabStatsLikes num={cookbook.likes}/>
                <TabStatsComments num={cookbook.comments}/>
            </div>
        </div>
    );
}

export default CookbookTab;