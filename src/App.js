import React, { useState } from 'react';
import './App.css';
import RestaurantList from './components/RestaurantList';
import Menu from './components/Menu';
import OrderTracking from './components/OrderTracking';
import Cart from './components/Cart';
import { Navbar, Nav, Badge, Modal, Button } from 'react-bootstrap';

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleRestaurantSelect = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsOrderPlaced(false);
  };

  const handleAddToCart = (restaurantId, item) => {
    setCartItems(prevCartItems => {
      const existingItem = prevCartItems.find(cartItem => cartItem.id === item.id && cartItem.restaurantId === restaurantId);

      if (existingItem) {
        return prevCartItems.map(cartItem =>
          cartItem.id === item.id && cartItem.restaurantId === restaurantId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCartItems, { ...item, quantity: 1, restaurantId }];
      }
    });
  };

  const handleRemoveFromCart = (restaurantId, itemId) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === itemId && item.restaurantId === restaurantId ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    setShowCart(false);
  };

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const handleBackToHome = () => {
    setSelectedRestaurant(null);
    setIsOrderPlaced(false);
  };

  return (
    <div className="App">
      <Navbar bg="transparent" expand="lg">
        <Nav className="mr-auto">
          {selectedRestaurant && (
            <Nav.Link onClick={handleBackToHome}>
              Back to Home
            </Nav.Link>
          )}
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link onClick={handleShowCart}>
            Cart <Badge pill variant="success">{cartItems.length}</Badge>
          </Nav.Link>
        </Nav>
      </Navbar>
      <div className="header">
        <h1>Food Ordering</h1>
      </div>
      {!selectedRestaurant ? (
        <RestaurantList onSelect={handleRestaurantSelect} />
      ) : !isOrderPlaced ? (
        <Menu
          restaurant={selectedRestaurant}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          cartItems={cartItems.filter(item => item.restaurantId === selectedRestaurant.id)}
        />
      ) : (
        <OrderTracking cartItems={cartItems} onOrderComplete={() => setCartItems([])} />
      )}
      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart items={cartItems} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>Close</Button>
          <Button
            variant="primary"
            onClick={() => {
              handlePlaceOrder();
              if (!selectedRestaurant) {
                handleRestaurantSelect({ id: 1, name: 'Restaurant' }); // Example to move to Order Tracking
              }
            }}
            disabled={cartItems.length === 0}
          >
            Place Order
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
