import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardUI({data}) {
    console.log(data);

    const { strCategory,strCategoryThumb, strMealThumb } = data

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={strCategoryThumb || strMealThumb} />
      <Card.Body>
        <Card.Title>{strCategory}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardUI;