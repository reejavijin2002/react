import React,{useState} from "react";
import './formtwo.css'



function Formtwo(props){

    let [name,setname]=useState('')
    let [number,setnumber]=useState('')
    let [email,setemail]=useState('')

    const {myfun}=props
    function onclick(params) {
        params.preventDefault()
        console.log("functioncalling");
        myfun(name,number,email)
        
    }

    function Namevalue(params) {
        console.log(params.target.value);
        setname(params.target.value)
        
    }
    function Numbervalue(params) {
        console.log(params.target.value);
        setnumber(params.target.value)
        
    }
    function Emailvalue(params) {
        console.log(params.target.value);
        setemail(params.target.value)
        
    }

    return(
        <>
        <div className="one">
            <h2><u>INFORMATION</u></h2>
        <form onSubmit={onclick}>
        <label  htmlFor="">NAME</label>
        <input onChange={Namevalue} type="text" placeholder="name" />
        {
            name.length===0?<span style={{color:"red"}}>No data</span>:""
        }
        <label htmlFor="">PHONE</label>
        <input onChange={Numbervalue} type="number" placeholder="number"/>
        {
            number.length===0?<span style={{color:"red"}}>No data</span>:""
        }
        <label htmlFor="">EMAIL</label>
        <input onChange={Emailvalue} type="email" placeholder="email" /><br></br>
        {
            email.length===0?<span style={{color:"red"}}></span>:""
        }
        <button>Submit</button>
        </form>
        </div>
        
        </>
    )
}

export default Formtwo