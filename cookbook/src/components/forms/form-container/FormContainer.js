import React from "react";
import './FormContainer.css';
import Logo from "../../logo/Logo";
import { Link } from "react-router-dom";
import { config } from "./config";


function FormContainer({className, title, subtitle, subtitleLink, subtitleLinkText, children}) {
    return (
        <div className={className}>
            <Logo logoClassName={config.logoClassName} logoImageClassName={ config.logoImageClassName } logoFontClassName={ config.logoFontClassName }/>
            <h2 className="form-title">{title}</h2>
            <h3 className="form-subtitle"> {subtitle} <Link to={subtitleLink} className="form-link--yellow">{subtitleLinkText}</Link></h3>
            {children}
        </div>
    );
}

export default FormContainer;