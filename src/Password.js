import React from "react"
import './layout.css'

function Password(){
    return(
        <>
        <h3> Username & Password</h3>
        <div className="seven">
        
        
        <div className="va">
        <label>Username</label><br></br>
        <input type="username" placeholder="username"></input><br></br>
        </div>
        <div  className="va">
        <label>Password</label><br></br>
        <input type="password" placeholder="password"></input><br></br>
        </div>
        
        <button className="six">submit</button>
        </div>
        </>
        
        
        
    )
}
export default Password