import "./TabStatsItem.css";
import {AiTwotoneEye} from "react-icons/ai";

const TabStatsViews = ({num}) => {
    return(
        <div className="tab-stats">
            <AiTwotoneEye className="icon"/><p className="tab-text">{num} views</p>
        </div>
    );
}

export default TabStatsViews;