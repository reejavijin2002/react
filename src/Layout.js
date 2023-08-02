import React from "react"
import {  Link ,Outlet} from "react-router-dom"
import './layout.css'
import img1 from './vijay.jpg'



function Layout(){
    return(
        <div className="five">
        <div className="one">
            
        <div className="two">
            <img src={img1} height={'88px'} width={'80px'} alt="img1"></img>
                
            <h3>Thalapathy Vijay</h3>
            <Link to='/account'>  <button style={{fontWeight:"bolder"}}> Account</button> </Link> <br></br>
            <Link to='password'><button style={{fontWeight:"bolder"}}>Password</button></Link><br></br>
            <Link to='security'><button style={{fontWeight:"bolder"}}>Security</button></Link><br></br>
            <Link to='application'><button style={{fontWeight:"bolder"}}>Application</button></Link><br></br>
            <Link to='notification'><button style={{fontWeight:"bolder"}}>Notification</button></Link>
        
        </div>
        <div className="three">
        <Outlet/>
        </div>
        </div>
            
        </div>
    )
}
export default  Layout