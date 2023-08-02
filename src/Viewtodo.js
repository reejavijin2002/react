import React from 'react'

const Viewtodo = ({task,removeTask,index}) => {
  return (
    <div className='view' style={{display:"flex"}}>
        <div style={{width:"150px",}}><p>{task.title}</p></div>
       <div style={{widows:"50px",}}> <button className='deletes'
       onClick={()=>{removeTask(index)}}
       >Delete</button></div>
       
    </div>
  )
}

export default Viewtodo