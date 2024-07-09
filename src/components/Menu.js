import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';

const itemImages = { 
  1: "https://img.freepik.com/free-photo/side-view-stewed-meatballs-with-tomato-sauce-bell-pepper-spring-onion-mint-plate_141793-5117.jpg",
  2: "https://img.freepik.com/free-photo/pizza-margarita-table_140725-1201.jpg",
  3: "https://img.freepik.com/free-photo/side-view-chicken-meatballs-with-greens-ketchup-plate_141793-4839.jpg",
  4: "https://img.freepik.com/free-photo/side-view-stewed-meatballs-with-tomato-sauce-bell-pepper-spring-onion-mint-plate_141793-5117.jpg",
  5: "https://img.freepik.com/free-photo/side-view-rice-garnish-with-fried-onion-carrot-greens-chili-pepper-table_141793-5069.jpg",
  6: "https://img.freepik.com/free-photo/side-lamb-ragout-with-fried-onion-carrot-tomato-sauce-greens-vegetable-salad-table_141793-4744.jpg" 
};

const menuItems = {
  1: [
    { id: 1, name: 'Gobi', price: 10 },
    { id: 2, name: 'Pizza', price: 15 },
  ],
  2: [
    { id: 3, name: 'Meat Balls', price: 12 },
    { id: 4, name: 'Chilli Chicken', price: 18 },
  ],
  3: [
    { id: 5, name: 'Biryani', price: 11 },
    { id: 6, name: 'Panner Masala', price: 16 },
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
        <Card key={item.id} className="menu-card">
          <Card.Body className="d-flex align-items-center">
            <img src={itemImages[item.id]} alt="Item" height="100px" width="100px" className="mr-3" />
            <div className="flex-grow-1">
              <Card.Title className="text-center">{item.name}</Card.Title>
            </div>
            <div className="text-right">
              <Card.Text className="mb-1">Price: ${item.price}</Card.Text>
              <ButtonGroup>
                <Button variant="danger" className="Item-btn-danger" onClick={() => onRemoveFromCart(restaurant.id, item.id)} disabled={getItemQuantity(item.id) === 0}>-</Button>
                <Button variant={getButtonVariant(item.id)} className="Item-btn" onClick={() => onAddToCart(restaurant.id, item)}>
                  {getItemQuantity(item.id)}
                </Button>
                <Button variant="primary" className="Item-btn" onClick={() => onAddToCart(restaurant.id, item)}>+</Button>
              </ButtonGroup>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Menu;
