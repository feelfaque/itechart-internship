import "./ProfileEdit.css";
import { useSelector } from "react-redux";
import {userEditData} from "./config";

const ProfileEdit = () => {
    const userData = useSelector(state => state.userDataReducer.user);

    return (
            <div className="wrapper profile-edit">
                <div className="profile-edit-card">
                    <h2 className="profile-edit-title">Personal information</h2>
                    <div className="profile-edit--flex">
                        <div className="profile-edit-list">
                            {userEditData.map((data,i) => <p key={i} className="profile-edit-text">{data.title}</p> )}
                        </div>
                        <div className="profile-edit-list">
                            {userEditData.map((data, i) => <p key={i} className="profile-edit-text">{userData[data.text]}</p> )}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default ProfileEdit;