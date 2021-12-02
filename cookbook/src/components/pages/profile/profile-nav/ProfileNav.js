import "./ProfileNav.css";
import {profileLinks} from "./config";

const ProfileNav = () => {
    return (
       <>
           <div className="wrapper profile-nav--flex">
               <nav className="profile-nav">
                   <ul className="profile-nav-list">
                       {profileLinks.map((item, i) => {
                           return <li key={i} className="profile-nav-item">
                               <button className="button profile-nav-button--no-border">{item.text}</button>
                           </li>
                       })}
                   </ul>
               </nav>
               <button className="button profile-nav-button--yellow">Create New CookBook</button>
           </div>
       </>
    );
}

export default ProfileNav;