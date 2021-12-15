import "./Profile.css";
import {useSelector} from "react-redux";
import ProfileInfo from "./profile-info/ProfileInfo";
import ProfileNav from "./profile-nav/ProfileNav";
import RecipeTabsList from "../../page-parts/recipe-tabs-list/RecipeTabsList";
import CookbookTabsList from "../../page-parts/cookbook-tabs-list/CookbookTabsList";
import Layout from "../../page-parts/layout/Layout";
import ProfileEdit from "./profile-edit/ProfileEdit";
import ModalWindow from "../../page-parts/modal/ModalWindow";

const Profile = () => {
    const currentTabs = useSelector((state) => state.profileNavReducer.currentTabs);
    const currentModal = useSelector((state) => state.openModalReducer.currentModal);

    return (
        <>
            <Layout>
                <div className="profile">
                    <ProfileInfo/>
                    <ProfileNav/>
                    {currentTabs === "cookbooks" ? <CookbookTabsList/> : (currentTabs === "recipes" ?
                        <RecipeTabsList/> : <ProfileEdit/>)}
                </div>
            </Layout>
            {currentModal === "new-cookbook" ? <ModalWindow titleText="CookBook"/> : (currentModal === "new-recipe" ?
                <ModalWindow titleText="Recipe"/> : "")
            } }
        </>
    );
}

export default Profile;