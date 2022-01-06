import "./CookbookTabsList.css";
import CookbookTab from "../cookbook-tab/CookbookTab";

const CookbookTabsList = ({cookbooks}) => {
    return (
        <>
            <div className="wrapper cookbook-tabs-list">
                {cookbooks.map((cookbook, i) => {
                    return <CookbookTab key={i} cookbook={cookbook} />
                })}
            </div>
        </>
    );
}

export default CookbookTabsList;