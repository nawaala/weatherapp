import React from "react";
function MenuItem ({image, name, details}) {
    return(
        <div className="menuItem">
            <div style={{ backgroundImage:`url(${image})` }}></div>
            <h1>{name}</h1>
            <p>{details}</p>
        </div>
    );

}

export default MenuItem;