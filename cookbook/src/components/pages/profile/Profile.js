import "./Profile.css";
import { useSelector } from "react-redux";
import ProfileInfo from "./profile-info/ProfileInfo";
import ProfileNav from "./profile-nav/ProfileNav";
import RecipeTabsList from "../../page-parts/recipe-tabs-list/RecipeTabsList";
import CookbookTabsList from "../../page-parts/cookbook-tabs-list/CookbookTabsList";
import Layout from "../../page-parts/layout/Layout";
import ProfileEdit from "./profile-edit/ProfileEdit";

const Profile = () => {
    const currentTabs = useSelector((state) => state.profileNavReducer.currentTabs);
    console.log(currentTabs);
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