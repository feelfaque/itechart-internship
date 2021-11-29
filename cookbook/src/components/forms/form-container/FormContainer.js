import React from "react";
import './FormContainer.css';
import Logo from "../../logo/Logo";
import { Link } from "react-router-dom";


function FormContainer({className, title, subtitle, subtitleLink, subtitleLinkText, children}) {
    return (
        <div className={className}>
            <Logo logoClassName="logo big" logoImageClassName="logo-image big" logoFontClassName="logo-title big"/>
            <h2 className="form-title">{title}</h2>
            <h3 className="form-subtitle"> {subtitle} <Link to={subtitleLink} className="form-link--yellow">{subtitleLinkText}</Link></h3>
            {children}
        </div>
    );
}

export default FormContainer;