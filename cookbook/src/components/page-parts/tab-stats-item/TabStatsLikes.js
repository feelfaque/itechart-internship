import "./TabStatsItem.css";
import {AiFillHeart} from "react-icons/ai";

const TabStatsLikes = ({num}) => {
    return(
        <div className="tab-stats">
            <AiFillHeart className="icon" />
            <p className="tab-text">{num} likes</p>
        </div>
    );
}

export default TabStatsLikes;