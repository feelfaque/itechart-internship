import './Nav.css';
import {Link} from 'react-router-dom';
import {openContentCookbooks, openContentRecipes} from "../../../redux/actions/page-nav/pageNavActions";
import {useDispatch} from "react-redux";

const Nav = ({navClassName, navLinks, linkClassName}) => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        const id = e.target.id;
        if (id === "cookbooks-header-link" || id === "cookbooks-footer-link") {
            dispatch(openContentCookbooks);
        } else if (id === "recipes-header-link" || id === "recipes-footer-link") {
            dispatch(openContentRecipes);
        }
    }
    return (
        <nav className={navClassName} onClick={handleClick}>
            <ul className="nav-list">
                {navLinks.map((item, i) => {
                    return <li className="nav-item" key={i}>
                        <Link className={linkClassName} to={item.link} id={item.id && item.id}>{item.text}</Link>
                    </li>
                })}
            </ul>
        </nav>
    );
}

export default Nav;