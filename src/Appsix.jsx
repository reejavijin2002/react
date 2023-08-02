import React from "react";


const users =() =>{
    const data=[
        {id:"1", val:"ab",
        ph:"2",gh:"cd"}, {id:"2", val:"gb",
        ph:"3",gh:"ce"},
        
    ]

return(<div className="">
    {data.map((user)=>(
        <div key={user.id}>{user.ph}</div>
    ))}
</div>)

    }
export default users