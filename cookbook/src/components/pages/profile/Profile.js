import "./Profile.css";
import {useDispatch, useSelector} from "react-redux";
import ProfileInfo from "./profile-info/ProfileInfo";
import ProfileNav from "./profile-nav/ProfileNav";
import RecipeTabsList from "../../page-parts/recipe-tabs-list/RecipeTabsList";
import CookbookTabsList from "../../page-parts/cookbook-tabs-list/CookbookTabsList";
import Layout from "../../page-parts/layout/Layout";
import ProfileEdit from "./profile-edit/ProfileEdit";
import {fetchUserDataStart} from "../../../redux/actions/user-data/userDataActions";
import {useEffect} from "react";

const Profile = () => {
    const currentTabs = useSelector((state) => state.profileNavReducer.currentTabs);
    const currentUserId = useSelector(state => state.auth.currentUser.uid);
    const dispatch = useDispatch();
    const fetchUserData = () => {
        dispatch(fetchUserDataStart(currentUserId));
    }
    const userData = useSelector(state => state.userDataReducer.user);
    useEffect(fetchUserData, [dispatch, currentUserId]);

    return(
        <>
            <Layout>
                <div className="profile">
                    <ProfileInfo />
                    <ProfileNav />
                    {currentTabs === "cookbooks"? <CookbookTabsList />:(currentTabs === "recipes"? <RecipeTabsList /> : <ProfileEdit />)}
                </div>
            </Layout>
        </>
    );
}

export default Profile;