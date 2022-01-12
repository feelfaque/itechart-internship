import "./ProfileInfo.css";
import {useDispatch, useSelector} from "react-redux";
import {updateUserAvatarStart} from "../../../../redux/actions/user-data/userDataActions";


const ProfileInfo = ({handleFileChange}) => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userDataReducer.user);
    const currentTabs = useSelector((state) => state.profileNavReducer.currentTabs);
    const imageURL = useSelector(state => state.imageStorageReducer.imageURL && state.imageStorageReducer.imageURL);


    const handleChange = (e) => {
        handleFileChange(e.target);
    }
    const handleAvatarUpdate = () => {
        dispatch(updateUserAvatarStart(imageURL));
    }

    return (
        <>
            <div className="wrapper">
                {userData ?
                    <div className="profile-info">

                        {currentTabs === "edit" ?
                            <div className="profile-avatar--container">
                                <img src={userData.avatar} alt="avatar" className="profile-avatar"/>
                                <input type="file" className="user-photo-input" onChange={handleChange}
                                       onBlur={handleAvatarUpdate}/>
                            </div> :
                            <img src={userData.avatar} alt="avatar" className="profile-avatar"/>}
                        <div className="profile-description">
                            <h2 className="profile-name">{userData.name}</h2>
                            <p className="profile-bio">{userData.shortBio}</p>
                        </div>
                    </div>
                    : "Loading"
                }
            </div>
        </>
    );
}

export default ProfileInfo;