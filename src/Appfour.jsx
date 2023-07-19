import React,{useState}   from "react";
import Formone from "./Formone";
import Displayone from "./Displayone";


function Appfour(){

    let [email,setemail]=useState()
    let [password,setpassword]=useState()

    const getvalue=(emailvalue,passwordvalue)=>{
        console.log("function....");
        setemail(emailvalue)
        setpassword(passwordvalue)
        // console.log(` Email-ID : ${emailvalue} \n\n Password : ${passwordvalue} `);


       
    }
    

    
    return(
        <>
        <Formone myfun={getvalue}/>
        <Displayone emailpros={email} passwordpros={password}/>
        </>
    )
}
export default Appfour