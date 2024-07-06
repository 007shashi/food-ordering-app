import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';

const menuItems = {
  1: [
    { id: 1, name: 'Item A1', price: 10 },
    { id: 2, name: 'Item A2', price: 15 },
  ],
  2: [
    { id: 1, name: 'Item B1', price: 12 },
    { id: 2, name: 'Item B2', price: 18 },
  ],
  3: [
    { id: 1, name: 'Item C1', price: 11 },
    { id: 2, name: 'Item C2', price: 16 },
  ],
};

function Menu({ restaurant, onAddToCart, onRemoveFromCart, cartItems }) {
  const getButtonVariant = (itemId) => (cartItems.find(item => item.id === itemId) ? 'success' : 'primary');

  const getItemQuantity = (itemId) => {
    const item = cartItems.find(item => item.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="menu">
      <h2>{restaurant.name} Menu</h2>
      {menuItems[restaurant.id].map((item) => (
        <Card key={item.id}>
          <Card.Body>
            <div className="card-content">
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Price: ${item.price}</Card.Text>
              <ButtonGroup>
                <Button variant="danger" onClick={() => onRemoveFromCart(restaurant.id, item.id)} disabled={getItemQuantity(item.id) === 0}>-</Button>
                <Button variant={getButtonVariant(item.id)} onClick={() => onAddToCart(restaurant.id, item)}>
                  {getItemQuantity(item.id)}
                </Button>
                <Button variant="primary" onClick={() => onAddToCart(restaurant.id, item)}>+</Button>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Menu;
