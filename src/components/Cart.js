import React from 'react';
import { Card } from 'react-bootstrap';

function Cart({ items }) {
  const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.map((item, index) => (
        <Card key={index}>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Quantity: {item.quantity}</Card.Text>
            <Card.Text>Price: ${item.price * item.quantity}</Card.Text>
            <Card.Text>Restaurant ID: {item.restaurantId}</Card.Text>
          </Card.Body>
        </Card>
      ))}
      <Card>
        <Card.Body>
          <Card.Title>Total: RS{totalAmount}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cart;
