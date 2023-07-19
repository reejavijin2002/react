import React from "react";
import './formtwo.css'


function Displayfive(props){

    const {nameprop,numberprop,emailprop}=props
    return(
        <>
        <div className="one">
            <h2><u>DETAILS</u></h2>
            <h3>NAME :     {nameprop}</h3>
            <h3>NUMBER :     {numberprop}</h3>
            <h3>EMAIL :     {emailprop}</h3>
        </div>
        

        </>
    )
}

export default Displayfive