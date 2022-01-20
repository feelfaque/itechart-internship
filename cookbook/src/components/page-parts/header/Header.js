import './Header.css';
import Logo from "../../logo/Logo";
import {LogoInfo, NavInfo} from "./config";
import Nav from "../navigation/Nav";
import SearchInput from "../../forms/search-input/SearchInput";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux';
import {useDispatch} from "react-redux";
import {openNewCookbookModalAction} from "../../../redux/actions/modal-window/modalWindowActions";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.userDataReducer.user);


    const handleProfileNav = () => {
        navigate("/profile");
    }

    const navSignIn = () => {
        navigate("/login");
    }

    const openNewCookbookModal = () => {
        dispatch(openNewCookbookModalAction);
    }

    return (
        <header className="header">
            <div className="wrapper header--row">
                <Link to="/">
                    <Logo logoClassName={LogoInfo.logoClassName} logoImageClassName={LogoInfo.logoImageClassName}
                          logoFontClassName={LogoInfo.logoFontClassName}/>
                </Link>
                <Nav navClassName={NavInfo.navClassName} navLinks={NavInfo.navLinks}
                     linkClassName={NavInfo.linkClassName}/>
                <SearchInput/>
                <div>
                    <button className="header-button button--yellow-border button--low" onClick={openNewCookbookModal}>Create CookBook</button>
                    {user ? <button className="header-button header-button--no-border header-button--icon"
                                    onClick={handleProfileNav}>{user.name}</button> :
                        <button className="header-button header-button--no-border" onClick={navSignIn}>Sign
                            in</button>}
                </div>
            </div>
        </header>
    );
}

export default Header;