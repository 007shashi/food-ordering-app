import React, { useEffect, useState } from 'react';

function OrderTracking({ cartItems, onOrderComplete }) {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const [message, setMessage] = useState('Your order is being prepared...');
  const [countdown, setCountdown] = useState(totalAmount < 5 ? 5 : 10);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setMessage('Your order is delivered!');
      setTimeout(() => onOrderComplete(), 1000);
    }
  }, [countdown, onOrderComplete]);

  return (
    <div className="order-tracking">
      <h2>Order Tracking</h2>
      <p>{message}</p>
      {countdown > 0 && <p>Order will be delivered in {countdown} seconds</p>}
    </div>
  );
}

export default OrderTracking;
