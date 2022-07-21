import React from "react"


const ItemList = ( props ) => {
    console.log(props.item)
    return(
        <>
          {props.item.map((items) => {
            return(
                <div key={items.id} className="col mb-4">
                <div className="card h-100">
                  <img src={items.image} className="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 className="card-title">{items.prod_name}</h5>
                    <p className="card-text">{items.price}</p>
                  </div>
                </div>
              </div>
            )
          })}
       </>
    )
    
    }

export default ItemList