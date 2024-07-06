import React from 'react';
import { Card, Button } from 'react-bootstrap';

const restaurants = [
  { id: 1, name: 'Restaurant A' },
  { id: 2, name: 'Restaurant B' },
  { id: 3, name: 'Restaurant C' },
];

function RestaurantList({ onSelect }) {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <Card key={restaurant.id}>
          <Card.Body>
            <div className="card-content">
              <Card.Title>{restaurant.name}</Card.Title>
              <Button onClick={() => onSelect(restaurant)} className="view-menu-button">View Menu</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default RestaurantList;