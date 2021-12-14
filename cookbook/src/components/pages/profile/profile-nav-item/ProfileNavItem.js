const ProfileNavItem = ({className, id, text}) => {
    return(
        <li className="profile-nav-item">
            <button
                className={className}
                id={id}>{text}
            </button>
        </li>
    );
}

export default ProfileNavItem;