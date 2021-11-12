import './LogoBig.css';
import logo from '../../assets/images/logo.png';

function LogoBig () {
    return(
        <div className="logo">
            <img src={logo} className="logo-image" alt="LogoBig" />
            <h1 className="logo-title">
                <span className="logo-text--black">Feed</span>
                <span className="logo-text--yellow">me</span>
            </h1>
        </div>
    );
}

export default LogoBig;