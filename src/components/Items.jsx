import React from 'react';
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
    const { prod_name, price, stock, image, id } = item;
    return (
        <div className="card h-100">
        <img src={item.image} className="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 className="card-title">{item.prod_name}</h5>
          <p className="card-text">{item.price}</p>
          <Link to={`item/${id}`}>
          <button className="btn btn-primary">See product details</button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Item;