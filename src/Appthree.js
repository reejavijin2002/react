import React,{useState}   from "react";
import Form from "./Form";
import Display from "./Display";

function Appthree(){
    
    let [email,setemail]=useState()
    let [password,setpassword]=useState()
    

    const getValue = (emailValue,passwordValue) =>{
        setemail(emailValue)
        setpassword(passwordValue)
        console.log(` Email-ID : ${emailValue} \n\n Password : ${passwordValue} `);
    }


    console.log(email,password,'state is here');
  

  

    return(
        <>
        <Form myfun={getValue} />
        <Display emailProp = {email} passwordProp = {password}/>
        </>
    )

}

export default Appthree