import React   from "react";


function Display(pros){

    console.log(pros);


    const {emailProp,passwordProp } = pros


    
    return(
        <React.Fragment>

            <h1>{emailProp}</h1>
            <h1>{passwordProp}</h1>
            
    
        </React.Fragment>

        
    
    )

}
export default Display
