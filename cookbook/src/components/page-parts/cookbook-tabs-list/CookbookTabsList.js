import "./CookbookTabsList.css";
import CookbookTab from "../cookbook-tab/CookbookTab";

const CookbookTabsList = ({cookbooks}) => {
    return (
        <>
            <div className="cookbook-tabs-list">
                {cookbooks && cookbooks.map((cookbook, i) => {
                    return <CookbookTab key={i} cookbook={cookbook} />
                })}
            </div>
        </>
    );
}

export default CookbookTabsList;