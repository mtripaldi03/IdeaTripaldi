import React from "react"


const ItemDetail = ( props ) => {
    return(
        <>
          {props.item.map((items) => {
            return(
                <div className="card">
                  <img src={items.image} className="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 className="card-title">{items.prod_name}</h5>
                    <p className="card-text">{items.price}</p>
                  </div>
                 </div>
            )
          })}
       </>
    )
    
    }

export default ItemDetail