import './Footer.css';
import itechArtLogo from "../../../assets/icons/itechartLogo.svg";
import Logo from "../../logo/Logo";
import {footerLogoInfo, NavInfo} from "./config";
import Nav from "../navigation/Nav";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper footer--row">
                <Logo logoClassName={footerLogoInfo.logoClassName}
                      logoImageClassName={footerLogoInfo.logoImageClassName}
                      logoFontClassName={footerLogoInfo.logoFontClassName}
                      logoTextColor={footerLogoInfo.logoTextColor}/>
                <Nav navLinks={NavInfo.navLinks} navClassName={NavInfo.navLinks} linkClassName={NavInfo.linkClassName}/>
                <a href="mailto:plzfeedme@itechart.com" className="mail-link">plzfeedme@itechart.com</a>
                <div className="project-info">
                    <p className="project-info--text">Study Project v2, 2021</p>
                    <img src={itechArtLogo} alt="iTeachArt" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;