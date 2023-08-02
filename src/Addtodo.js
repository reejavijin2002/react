import { useState } from "react"
import React from 'react'

const Addtodo = ({addItem}) => {
    const[value,setValue]=useState('')

    const addtask=()=>{
      addItem(value);
      setValue("")
    }

  return (
    <div style={{display:'flex'}}>
       <p><input type='text' placeholder='Add a new task' value={value} onChange={(e)=>{
        setValue(e.target.value)
       }}/>
       <button
       onClick={addtask}
       
       >Add</button>
        </p> 
    </div>
  )
}

export default Addtodo