import React from 'react';
import { Card, Image } from 'react-bootstrap';

const restaurantImages = {
  1: "https://img.freepik.com/free-photo/side-view-barbecue-salad-served-table_141793-4764.jpg",
  2: "https://img.freepik.com/free-photo/spicy-minced-chicken-white-plate-complete-with-cucumber-lettuce-side-dishes_1150-23199.jpg",
  3: "https://img.freepik.com/free-photo/side-view-vegetable-salad-with-cucumber-red-onion-bell-pepper-greens-black-pepper-plate_141793-5152.jpg",
};

const restaurants = [
  { id: 1, name: 'Empire' },
  { id: 2, name: 'Taj' },
  { id: 3, name: 'Gardenia' },
];

function RestaurantList({ onSelect }) {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <Card key={restaurant.id}>
          <Card.Body onClick={() => onSelect(restaurant)}>
            <div className="card-content">
              <Card.Title>{restaurant.name}</Card.Title>
              <Image src={restaurantImages[restaurant.id]} height="100px" width="100px" />
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default RestaurantList;
