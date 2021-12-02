import "./Profile.css";
import Header from "../../page-parts/header/Header";
import Footer from "../../page-parts/footer/Footer";
import ProfileInfo from "./profile-info/ProfileInfo";
import ProfileNav from "./profile-nav/ProfileNav";

const Profile = () => {
    return(
        <div>
            <Header />
            <ProfileInfo />
            <ProfileNav />
            <Footer />
        </div>
    );
}

export default Profile;