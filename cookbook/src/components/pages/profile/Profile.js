import "./Profile.css";
import Header from "../../page-parts/header/Header";
import Footer from "../../page-parts/footer/Footer";
import ProfileInfo from "./profile-info/ProfileInfo";
import ProfileNav from "./profile-nav/ProfileNav";
import RecipeTabsList from "../../page-parts/recipe-tabs-list/RecipeTabsList";

const Profile = () => {
    return(
        <>
            <Header />
            <div className="profile">
                <ProfileInfo />
                <ProfileNav />
                <RecipeTabsList />
            </div>
            <Footer />
        </>
    );
}

export default Profile;