import React from "react";
import { Link } from "react-router-dom";
function Navigation(){
    return <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
    </div>
}

export default Navigation;