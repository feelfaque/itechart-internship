import "./TabStatsItem.css";
import {AiFillHeart} from "react-icons/ai";

const TabStatsLikes = ({num, onClick}) => {
    return(
        <div className="tab-stats" onClick={onClick}>
            <AiFillHeart className="icon" data-id="like"/>
            <p className="tab-text">{num} likes</p>
        </div>
    );
}

export default TabStatsLikes;