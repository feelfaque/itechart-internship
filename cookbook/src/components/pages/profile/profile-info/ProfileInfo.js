import "./ProfileInfo.css";
import {useSelector} from "react-redux";

const ProfileInfo = () => {
    const userData = useSelector(state => state.userDataReducer.user);
    return (
       <>
           <div className="wrapper">
               <div className="profile-info">
                   <img src={userData.avatar} alt="avatar" className="profile-avatar"/>
                   <div className="profile-description">
                       <h2 className="profile-name">{userData.name}</h2>
                       <p className="profile-bio">{userData.shortBio}</p>
                   </div>
               </div>
           </div>
       </>
    );
}

export default ProfileInfo;