import "./ProfileNav.css";
import {profileLinks, linkClass} from "./config";
import {useDispatch, useSelector} from "react-redux";
import {openCookbooks, openEdit, openRecipes} from "../../../../redux/actions/profile-nav/profileNavActions";
import ProfileNavItem from "../profile-nav-item/ProfileNavItem";
import {logOutAction} from "../../../../redux/actions/auth/authActions";
import {useNavigate} from "react-router-dom";
import {
    openNewCookbookModalAction,
    openNewRecipeModalAction
} from "../../../../redux/actions/modal-window/modalWindowActions";

const ProfileNav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    const handleLogOut = () => {
        dispatch(logOutAction);
        navigate("/");
    }

    const openNewCookbookModal = () => {
        dispatch(openNewCookbookModalAction);
    }

    const openNewRecipeModal = () => {
        dispatch(openNewRecipeModalAction);
    }
    return (
        <>
            <div className="wrapper profile-nav--flex">
                <nav className="profile-nav">
                    <ul className="profile-nav-list" onClick={handleClick}>
                        {profileLinks.map((item, i) => {
                            return <ProfileNavItem key={i} text={item.text} id={item.id}
                                                   className={currentLink === item.currentTab ? linkClass.active : linkClass.disabled}/>
                        })}
                    </ul>
                </nav>
                {currentLink === "cookbooks" ? <button className="button profile-nav-button--yellow" onClick={openNewCookbookModal}>Create New
                    CookBook</button> : (currentLink === "recipes" ?
                    <button className="button profile-nav-button--yellow" onClick={openNewRecipeModal}>Create New Recipe</button> : "")}
                <button className="button profile-nav-button--yellow" onClick={handleLogOut}>Log out</button>
            </div>
        </>
    );
}

export default ProfileNav;