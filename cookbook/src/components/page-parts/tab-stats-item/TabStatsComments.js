import "./TabStatsItem.css";
import {MdModeComment} from "react-icons/md";

const TabStatsComments = ({num}) => {
    return (
        <div className="tab-stats">
            <MdModeComment className="icon" />
            <p className="tab-text">{num} comments</p>
        </div>
    );
}

export default TabStatsComments;