import React from "react";
import './FormContainer.css';
import LogoBig from "../../logo/LogoBig";


function FormContainer ({title,subtitle,subtitleLink,children}) {
    return (
        <div className="form-container form--font">
                <LogoBig />
                <h2 className="form-title">{title}</h2>
            <h3 className="form-subtitle"> {subtitle} <span className="form-link--yellow">{subtitleLink}</span> </h3>
            {children}
        </div>
    );
}

export default FormContainer;