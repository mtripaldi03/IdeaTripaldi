import { useState } from "react";
import './styles/ItemCount.css';
const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const updateCount = (op) => {
    if (op === "-" && count > 0) {
      setCount(count - 1);
    }
    if (op === "+" && count < stock) {
      setCount(count + 1);
    }
  };
  const updateCountInput = (e) => {
    const { value } = e.target;
    if (value <= stock) {
      setCount(isNaN(value) ? 0 : parseInt(value));
    }
  };
  return (
    <>
      <div className="input-group input-spinner mb-3 d-flex justify-content-center">
     { count == 1 ? (<button
          onClick={() => updateCount("-")}
          className="btn btn-icon btn-primary"
          type="button"
          disabled={count === "" || count === 0}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
</svg>
        </button>) : <button
          onClick={() => updateCount("-")}
          className="btn btn-icon btn-primary"
          type="button"
          disabled={count === "" || count === 0}
        >
        -
        </button>
}    
        <input
          onChange={(e) => updateCountInput(e)}
          className="border-dark"
          placeholder=""
          value={count}
          type="number"
        />
        
        <button
          onClick={() => updateCount("+")}
          className="btn btn-icon btn-primary"
          type="button"
          disabled={stock === count}
          
        >
          +
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => onAdd(count)}
          type="button"
          className="btn btn-info"
          disabled={count === "" || count === 0}
        >
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ItemCount;