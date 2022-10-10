import React from "react";

export default function Product(props) {
  //receiving props from ProductList.js
  return (
    <div className="row mt-3">
      {/* mt-3 gives margin of 3 bootstrap */}
      <div className="col-5">
        {/* we need to write in javascript we use {]*/}
        {/* Badge is a button type representation available at bootstrap
            Displaying the price of product in badge */}
        <h2>
          {props.product.name}{" "}
          <span class="badge text-dark">₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" class="btn btn-warning">
            {props.product.quantity}
          </button>
          {/* adding onclick on our plus button 
          MAking a function Increasequantity for that*/}
          <button
            type="button"
            class="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      {/* displaying total amount */}
      <div className="col-2">
        {props.product.price * props.product.quantity}
      </div>
      <button
        className="col-2 btn btn-danger"
        onClick={() => {
          props.removeItem(props.index);
        }}
      >
        Remove
      </button>
    </div>
  );
}
