import React from "react";
import "./app.css"
import Headerleft from "./Headerleft";
import Headerright from "./Headerright";

function Headers() {
    return(
        <div className="Headers">
            <Headerleft/>
            <Headerright/>
            
        </div>
    )
}
export default Headers