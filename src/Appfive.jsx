import React,{useState} from "react";
import Displayfive from "./Displayfive";
import Formtwo from "./Formtwo";


function Appfive(){

    let [name,setname]=useState()
    let [number,setnumber]=useState()
    let [email,setemail]=useState()

    const getvalue=(Namevalue,Numbervalue,Emailvalue)=>{
        setname(Namevalue)
        setnumber(Numbervalue)
        setemail(Emailvalue)


    }
    return(
        <>
        <Formtwo myfun={getvalue}/>
        <Displayfive nameprop={name} numberprop={number} emailprop={email}/>
        </>
    )
}

export default Appfive