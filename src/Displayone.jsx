import React   from "react";


function Displayone(props){
    console.log(props);

    const{emailpros,passwordpros}=props
    return(
        <>
        <div className="one">
         <h3> Email id :{emailpros}</h3>
        <h3> Password :{passwordpros}</h3> 
        </div>
        
        </>
    )
}
export default Displayone