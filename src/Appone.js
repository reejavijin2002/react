import React,{useState}  from "react";
import "./appone.css"
import Login from "./Login";
import Signup from "./Sigin";

function Appone(){
    let [state,setState]=useState(false)
    return(

        <div className="one">
        <div className="buttons">
          <button
            onClick={function name(params) {
              setState(true);
            }}
          >
            Login
          </button>
          <button onClick={function name(params) {
            setState(false)
          }}>Signup</button>
        </div>
        {state? <Login/>: <Signup/>}
      </div>

    )
}

export default Appone;