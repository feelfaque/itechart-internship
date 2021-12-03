import "./Profile.css";
import { useSelector } from "react-redux";
import Header from "../../page-parts/header/Header";
import Footer from "../../page-parts/footer/Footer";
import ProfileInfo from "./profile-info/ProfileInfo";
import ProfileNav from "./profile-nav/ProfileNav";
import RecipeTabsList from "../../page-parts/recipe-tabs-list/RecipeTabsList";
import CookbookTabsList from "../../page-parts/cookbook-tabs-list/CookbookTabsList";

const Profile = () => {
    const currentTabs = useSelector((state) => state.profileNavReducer.currentTabs);
    console.log(currentTabs);
    return(
        <>
            <Header />
            <div className="profile">
                <ProfileInfo />
                <ProfileNav />
                {currentTabs === "cookbooks"? <CookbookTabsList />:(currentTabs === "recipes"? <RecipeTabsList /> : "")}
            </div>
            <Footer />
        </>
    );
}

export default Profile;