import React from "react";
import './FormContainer.css';
import LogoBig from "../../logo/LogoBig";
import { Link } from "react-router-dom";


function FormContainer({className, title, subtitle, subtitleLink, subtitleLinkText, children}) {
    return (
        <div className={className}>
            <LogoBig/>
            <h2 className="form-title">{title}</h2>
            <h3 className="form-subtitle"> {subtitle} <Link to={subtitleLink} className="form-link--yellow">{subtitleLinkText}</Link></h3>
            {children}
        </div>
    );
}

export default FormContainer;