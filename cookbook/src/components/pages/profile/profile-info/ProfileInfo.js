import "./ProfileInfo.css";
import avatar from "../../../../assets/images/avatar.jpg"
const user = {
    name: "John Doe",
    shortBio: "I don’t know about you but I love pizza. Especially when that pizza comes with Papa John’s very own garlic pizza sticks."
}

const ProfileInfo = () => {
    return (
       <>
           <div className="wrapper">
               <div className="profile-info">
                   <img src={avatar} alt="avatar" className="profile-avatar"/>
                   <div className="profile-description">
                       <h2 className="profile-name">{user.name}</h2>
                       <p className="profile-bio">{user.shortBio}</p>
                   </div>
               </div>
           </div>
       </>
    );
}

export default ProfileInfo;