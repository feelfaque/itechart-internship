import './Header.css';
import Logo from "../../logo/Logo";
import {LogoInfo, NavInfo} from "./config";
import Nav from "../navigation/Nav";
import SearchInput from "../../forms/search-input/SearchInput";

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper header--row">
                <Logo logoClassName={LogoInfo.logoClassName} logoImageClassName={LogoInfo.logoImageClassName}
                      logoFontClassName={LogoInfo.logoFontClassName}/>
                <Nav navClassName={NavInfo.navClassName} navLinks={NavInfo.navLinks}
                     linkClassName={NavInfo.linkClassName}/>
                <SearchInput/>
                <div>
                    <button className="header-button header-button--yellow">Create CookBook</button>
                    <button className="header-button header-button--no-border">UserProfile</button>
                </div>
            </div>
        </header>
    );
}

export default Header;