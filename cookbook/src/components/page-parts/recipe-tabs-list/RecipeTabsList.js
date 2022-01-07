import "./RecipeTabsList.css";
import RecipeTab from "../recipe-tab/RecipeTab";
import {useEffect} from "react";
import {fetchUserRecipesStart} from "../../../redux/actions/data-fetch/dataFetchActions";
import {useDispatch, useSelector} from "react-redux";

const RecipeTabsList = ({recipes}) => {
    const dispatch = useDispatch();
    const currentUserId = useSelector(state => state.auth.currentUser.uid && state.auth.currentUser.uid);

    const fetchUserData = () => {
        dispatch(fetchUserRecipesStart(currentUserId));
    }
    useEffect(fetchUserData, []);
    return<>
        <div className="recipe-tabs-list">
            {recipes && recipes.map((recipe, i) => {
                return <RecipeTab key={i} recipe={recipe} />
            })}
        </div>
    </>;
}

export default RecipeTabsList;