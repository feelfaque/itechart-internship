import './Logo.css';
import logo from '../../assets/images/logo.png';

function Logo ({logoClassName, logoImageClassName, logoFontClassName, logoTextColor}) {
    return(
        <div className={logoClassName}>
            <img src={logo} className={logoImageClassName} alt="Logo" />
            <h1 className={logoFontClassName}>
                <span className={logoTextColor}>Feed</span>
                <span className="logo-text--yellow">me</span>
            </h1>
        </div>
    );
}

export default Logo;