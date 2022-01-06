import "./CookbookTab.css";
import TabStatsViews from "../tab-stats-item/TabStatsViews";
import TabStatsLikes from "../tab-stats-item/TabStatsLikes";
import TabStatsComments from "../tab-stats-item/TabStatsComments";

const CookbookTab = ({userName, title, imageUrl, description, views, comments, likes}) => {
    return (
        <div className="tab cookbook-tab">
            <TabStatsViews num={views}/>
            <img src={imageUrl} alt="cookbook cover" className="cookbook-tab-photo"/>
            <div className="cookbook-tab-title">
                <h3 className="cookbook-tab-name">{title}</h3>
                <h4 className="tab-text">{userName}</h4>
            </div>
            <p className="tab-text cookbook-tab--margin">{description}</p>
            <div className="cookbook-tab-stats-list">
                <TabStatsLikes num={likes}/>
                <TabStatsComments num={comments}/>
            </div>
        </div>
    );
}

export default CookbookTab;