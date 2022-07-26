import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import './styles/ItemDetail.css'


const ItemDetail = ({ item }) => {
  const [amount, setAmount] = useState(0);
  const { prod_name, price, stock, image, id } = item;
  const onAdd = (amount) => {
    setAmount(amount);
    
  };
  return (
    <div className="container">
    <div className="card" style={{ width: "20rem" }}>
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{prod_name}</h5>
        <p className="card-text">{`${stock} units available!`}</p>
        <p className="card-text">{`${price}`}</p>
      
      {amount == 0 ? (
        <ItemCount stock={stock} initial={0} onAdd={onAdd} />
      ) : (
        <p className="card-text">{amount} added to cart</p>
      )}</div>
      <div className="d-flex justify-content-center my-3">
        <Link to="/cart/">
          <button className="btn btn-info">Go to checkout</button>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default ItemDetail