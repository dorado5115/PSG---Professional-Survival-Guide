import React from "react";

export default function Box({ title, children }) {

    return(
        <div className="box">
            <h3>{title}</h3>
            <ul>
                {children.map(child => (
                    <li>{child}</li>
                ))}
            </ul>
        </div>
    )
}