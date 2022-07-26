import React from "react"
import Item from "./Items"

const ItemList = ( props ) => {
    console.log(props.item)
    return(
        <>
          {props.item.map((items) => {
            return(
                <div key={items.id} className="col mb-4">
                  <Item item={items} />
              </div>
            )
          })}
       </>
    )
    
    }

export default ItemList