import "./CookbookTab.css";
import fruit from "../../../assets/images/fruit.jpg";
import TabStatsViews from "../tab-stats-item/TabStatsViews";
import TabStatsLikes from "../tab-stats-item/TabStatsLikes";
import TabStatsComments from "../tab-stats-item/TabStatsComments";

const cookbook = {
    views: "12000",
    name: "Fresh fruits",
    author: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna amet etiam risus aliquet sit vel",
    likes: 499,
    comments: 12
}
const CookbookTab = () => {
    return (
        <div className="tab cookbook-tab">
            <TabStatsViews num={cookbook.views}/>
            <img src={fruit} alt="cookbook cover" className="cookbook-tab-photo"/>
            <div className="cookbook-tab-title">
                <h3 className="cookbook-tab-name">{cookbook.name}</h3>
                <h4 className="tab-text">{cookbook.author}</h4>
            </div>
            <p className="tab-text cookbook-tab--margin">{cookbook.description}</p>
            <div className="cookbook-tab-stats-list">
                <TabStatsLikes num={cookbook.likes}/>
                <TabStatsComments num={cookbook.comments}/>
            </div>
        </div>
    );
}

export default CookbookTab;