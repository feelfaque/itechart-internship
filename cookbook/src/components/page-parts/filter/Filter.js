import "./Filter.css";
import {
    sortCookbooksByLikes, sortCookbooksByViews,
    sortRecipesByLikes,
    sortRecipesByViews
} from "../../../redux/actions/data-fetch/dataFetchActions";
import {useDispatch} from "react-redux";

const Filter = ({currentLink, recipes, cookbooks}) => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
       const value = e.target.value;

       if (currentLink === "cookbooks") {
           if (value === "views") {
               dispatch(sortCookbooksByViews);
           } else {
               dispatch(sortCookbooksByLikes);
           }
       } else {
           if (value === "views") {
               dispatch(sortRecipesByViews);
           } else {
               dispatch(sortRecipesByLikes);
           }
       }
    }

    return (
        <div className="filter-container">
            <h3 className="filter-title">Filter</h3>
            <h4 className="filter-subtitle">Sort by</h4>
            <select className="filter-select" onChange={handleChange}>
                <option value="views">views</option>
                <option value="likes">likes</option>
            </select>
        </div>
    );
}

export default Filter;