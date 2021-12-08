import "./ProfileNav.css";
// import {profileLinks} from "./config";
import {useDispatch, useSelector} from "react-redux";
import {openCookbooks, openEdit, openRecipes} from "../../../../redux/actions/profile-nav/profileNavActions";

const ProfileNav = () => {
    const dispatch = useDispatch();
    const currentLink = useSelector(state => state.profileNavReducer.currentTabs);

    const handleClick = (e) => {
        if (e.target.id === "open-cookbooks-button") {
            dispatch(openCookbooks);
        } else if (e.target.id === "open-recipes-button") {
            dispatch(openRecipes);
        } else {
            dispatch(openEdit);
        }
    }
    return (
        <>
            <div className="wrapper profile-nav--flex">
                <nav className="profile-nav">
                    <ul className="profile-nav-list" onClick={handleClick}>
                        <li className="profile-nav-item">
                            <button
                                className={currentLink === "cookbooks" ? "button profile-nav-button--no-border active-button" : "button profile-nav-button--no-border"}
                                id="open-cookbooks-button">My Cookbooks
                            </button>
                        </li>
                        <li className="profile-nav-item">
                            <button
                                className={currentLink === "recipes" ? "button profile-nav-button--no-border active-button" : "button profile-nav-button--no-border"}
                                id="open-recipes-button">My Recipes
                            </button>
                        </li>
                        <li className="profile-nav-item">
                            <button
                                className={currentLink === "edit" ? "button profile-nav-button--no-border active-button" : "button profile-nav-button--no-border"}
                                id="open-edit-button">Edit Profile
                            </button>
                        </li>

                    </ul>
                </nav>
                <button className="button profile-nav-button--yellow">Create New CookBook</button>
            </div>
        </>
    );
}

export default ProfileNav;