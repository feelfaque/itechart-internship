import "./ProfileEdit.css";
import { useSelector } from "react-redux";

const ProfileEdit = () => {
    const user = useSelector(state => state.auth.currentUser);

    return (
            <div className="wrapper profile-edit">
                <div className="profile-edit-card">
                    <h2 className="profile-edit-title">Personal information</h2>
                    <div className="profile-edit--flex">
                        <div className="profile-edit-list">
                            <p className="profile-edit-text">Name</p>
                            <p className="profile-edit-text">Email</p>
                            <p className="profile-edit-text">Password</p>
                        </div>
                        <div className="profile-edit-list">
                            <p className="profile-edit-text">John Doe</p>
                            <p className="profile-edit-text">{user.email}</p>
                            <p className="profile-edit-text">{user.password}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default ProfileEdit;