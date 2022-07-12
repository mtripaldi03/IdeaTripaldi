import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './styles/CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart">
      <FontAwesomeIcon icon={faShoppingCart} size="2x" color="orange" />
      <div className="qty-cart">0</div>
    </div>
  );
};

export default CartWidget;