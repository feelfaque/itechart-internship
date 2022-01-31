import "./PageNav.css";
import {linkClass} from "./config";
import PageNavItem from "./PageNavItem";

const PageNav = ({links, handleClick, currentLink}) => {

    return (
        <nav className="page-nav">
            <ul className="page-nav-list" onClick={handleClick}>
                {links.map((item, i) => {
                    return <PageNavItem key={i} text={item.text} id={item.id}
                                           className={currentLink === item.currentTab ? linkClass.active : linkClass.disabled}/>
                })}
            </ul>
        </nav>
    );
}

export default PageNav;