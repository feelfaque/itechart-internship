import "./CookbookTabsList.css";
import CookbookTab from "../cookbook-tab/CookbookTab";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserCookbooksStart} from "../../../redux/actions/data-fetch/dataFetchActions";
import {useEffect} from "react";

const CookbookTabsList = ({cookbooks}) => {
    const dispatch = useDispatch();
    const currentUserId = useSelector(state => state.auth.currentUser.uid && state.auth.currentUser.uid);

    const fetchUserData = () => {
        dispatch(fetchUserCookbooksStart(currentUserId));
    }
    useEffect(fetchUserData, [currentUserId, dispatch]);

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