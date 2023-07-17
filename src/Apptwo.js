import React,{useState}   from "react";


function Apptwo(){
    let [state,setState]=useState(0)
    return(
        <>
        <h1>{state}</h1>
        <div>
            <button onClick={ 
                function name(params) {
                    {
                    setState(state+1)
                    }
                }
            }>Increment</button>
            <button onClick={
                function name(params) {
                    if(state>0){
                    setState(state-1)
                    }
                }
            }
            >Decrement</button>
        </div>
        </>
     )
}

export default Apptwo;