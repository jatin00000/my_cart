//to import react quickly write imr
import React from "react";
import Product from "./Product.js";
// rfc for functional component

export default function ProductList(props) {
  return (
    //props in a container carrying things
    //individual things have same name as they have passed

    //one important condition if all the items are removed then ????
    props.productList.length > 0 ?
    props.productList.map(
      //returning the each product information from productList through another component
      //map is used to process each item in a array like for loop
      //map always needs a key to distinguish things, passing index as key
      (product, i) => {
        return (
          
          <Product
            product={product}
            key={i}
            incrementQuantity={props.incrementQuantity}
            index={i}
            decrementQuantity={props.decrementQuantity}
            removeItem={props.removeItem}
          />
        );
      }
    ) 
    :
    <h1 className="text-center">Please add products in the cart</h1>
  );
}
