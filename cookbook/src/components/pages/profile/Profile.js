import "./Profile.css";
import Header from "../../page-parts/header/Header";
import Footer from "../../page-parts/footer/Footer";
import ProfileInfo from "./profile-info/ProfileInfo";
import ProfileNav from "./profile-nav/ProfileNav";
import CookbookTabsList from "../../page-parts/cookbook-tabs-list/CookbookTabsList";

const Profile = () => {
    return(
        <>
            <Header />
            <div className="profile">
                <ProfileInfo />
                <ProfileNav />
                <CookbookTabsList />
            </div>
            <Footer />
        </>
    );
}

export default Profile;