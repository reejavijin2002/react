import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from "./Master Vijay copy.jpg"


const Api=()=> {
const[post,setpost]=useState([])

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response => response.json())
    .then(post => setpost(post),[]);
}
    
)
       
    
  return (
    <div>
      {
        post.map((post)=>(
            <>
            <Card style={{ width: '18rem',backgroundColor:"#f5533d",padding:"30px",color:"aliceblue",margin:"20px" ,}}>
      <Card.Img variant="top" src={img1} height={"100px"} width={"100px"} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
        {post.body}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            {/* <h1 key={post.id}>
            {post.id}{post.title}
            </h1>
            <p>
                {post.body}
            </p> */}
            </>
        ))
      }
    </div>
  )
}

export default Api