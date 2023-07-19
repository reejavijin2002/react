import React,{useState}   from "react";
import './formone.css'


function Formone(props){
    const {myfun}=props

        let [email,setemail]=useState('')
        let [password,setpassword]=useState('')


       

        function onclick(params) {
            params.preventDefault()
            console.log("function calling...");
            myfun(email,password)
            
        }

        function emailvalue(params) {
            console.log("change");
            setemail(params.target.value)
            
        }

        function passwordvalue(params) {
            console.log("change2");
            setpassword(params.target.value)
            
        }



    return(
        <>
        <div className="one">
        <form onSubmit={onclick}>
            <input onChange={emailvalue} type="email" placeholder="Email"/>
            {
                email.length===0?<span style={{color:'red',fontWeight:"bolder",marginLeft:"10px"}}>This field is null</span> : ''
            }
                
            <input onChange={passwordvalue} type="password" placeholder="password" />
            {
                password.length===0? <span style={{color:'red',fontWeight:"bolder",marginLeft:"10px"}}>This field is null</span> : ''
            }
            <button>Submit</button>
        </form>
        </div>
   
        </>

    )
}
export default Formone