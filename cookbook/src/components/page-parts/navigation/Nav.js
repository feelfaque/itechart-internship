import './Nav.css';
import {Link} from 'react-router-dom';

const Nav = ({navClassName, navLinks, linkClassName}) => {
    return (
        <nav className={navClassName}>
            <ul className="nav-list">
                {navLinks.map((item, i) => {
                    return <li className="nav-item" key={i}>
                        <Link className={linkClassName} to={item.link}>{item.text}</Link>
                    </li>
                })}
            </ul>
        </nav>
    );
}

export default Nav;