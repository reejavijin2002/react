import React, { useState } from 'react'
import "./Todo.css"
import Addtodo from './Addtodo'
import Viewtodo from './Viewtodo'

const Todo = () => {
    const[tasks,setTasks]=useState([
        
    ])

    const addItem=(title)=>{
        const newTask=[...tasks,{title}]
        setTasks(newTask)
    }
    const removeTask=(index)=>{
        const newTask=[...tasks]
        newTask.splice(index,1)
        setTasks(newTask)
    }
    
  return (
    <div className='header'>
        <div className='shadow NEXT'>
            <h3>TODO APP</h3>

        </div>
        <div className='addtodo'>
            <Addtodo addItem={addItem}/>

        </div>
        <div className='viewtodo'>
            {
                tasks.map((task,index)=>(
                    <Viewtodo task={task} removeTask={removeTask} index={index}/>

                ))
            }
            

        </div>


    </div>
  )
}

export default Todo