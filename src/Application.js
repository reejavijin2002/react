import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img2 from './instagram.jpg'
import img3 from "./whatsapp.jpg"

function Application() {
  return (
    <div className="ten">
    <Card style={{ width: '300px',height:"300px",padding:"30px" ,marginTop:"20px",backgroundColor:"rgb(244, 208, 163)",borderRadius:"30px",border:"none" ,boxShadow:"8px 8px"}} className="eleven">
      <Card.Img variant="top" src={img2} height={'100px'} width={'130px'} style={{marginBottom:"20px",marginleft:""}} />
      <Card.Body>
        <Card.Title style={{textAlign:"center",fontWeight:"bolder"}}>INSTAGRAM</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" id='one'style={{height:"40px",width:"150px",fontWeight:"bolder",borderRadius:"10px",marginLeft:"80px",boxShadow:"3px 3px"}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '300px',height:"300px",padding:"30px" ,marginTop:"20px",backgroundColor:"rgb(244, 208, 163)",borderRadius:"30px",border:"none",boxShadow:"8px 8px" }}>
    <Card.Img variant="top" src={img3} height={'100px'} width={'130px'} style={{marginBottom:"20px",marginleft:""}} />
    <Card.Body>
      <Card.Title style={{textAlign:"center",fontWeight:"bolder"}}>WATSUP</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary" id='one'style={{height:"40px",width:"150px",fontWeight:"bolder",borderRadius:"10px",marginLeft:"80px",boxShadow:"3px 3px"}}>Go somewhere</Button>
    </Card.Body>
  </Card>
  </div>

  );
}

export default Application;

