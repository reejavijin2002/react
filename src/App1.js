import React ,{useState}from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const App1=()=> {
  const [count,setcount]=useState(0)

const products=[
    {name:"I PHONE",Body:"The iPhone is a smartphone made by Apple",price:"10000",Image:"iphone"},
    {name:"SAMSUNG",Body:"The iPhone is a smartphone made by SAMSUNG",price:"10000",Image:"samsung"},
    {name:"OPPO",Body:"The iPhone is a smartphone made by OPPO",price:"10000",Image:"oppo"},
    {name:"VIVO",Body:"The iPhone is a smartphone made by VIVO",price:"10000",Image:"vivo"},
    {name:"REALME",Body:"The iPhone is a smartphone made by REALME",price:"10000",Image:"realme"}
]
const add=()=>{
  setcount(count+1)
}
const les=()=>{
  setcount(count-1)
}

  return (
    <div>
          <h1 className='bg-warning p-2 m-4' style={{textAlign:"center",fontWeight:"bolder"}}>Mobile Store</h1>

    {
        products.map((App1)=>(
          <div className='shadow p-2 m-4 ' style={{textAlign:"center",fontWeight:"bolder",display:"inline-flex"}}>
          <Card style={{ width: '13rem' ,border:"none",borderRadius:"30px"}}>
        <Card.Img variant="top" style={{ height: '15rem' }} src={require(`./${App1.Image}.jpg`)} />
        <Card.Body>
          <Card.Title>{App1.name}</Card.Title>
          <Card.Text>
            {App1.Body}
          </Card.Text>
          <div>
              <h4>PRICE : {App1.price}</h4>
              
              <p><Button className='bg-warning' onClick={add}>+</Button>{count}<Button className='bg-warning' onClick={les}>-</Button></p>
              
  
          </div>
          <Button variant="primary" className='bg-warning'>ADD TO CART</Button>
        </Card.Body>
      </Card>
      </div>

        ))
    }
    </div>
  )
  
  
}

export default App1
