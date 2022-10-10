//import logo from './logo.svg';
import "./App.css";
//import Navbar from location
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
//for using state hook import it
import { useState } from "react";

//adding form
import AddItem from "./components/AddItem";
function App() {
  //created a list of items in which information is stored in form of array
  const products = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi 10S Max",
      quantity: 0,
    },
  ];
  // creating a hook
  // let [<variable to hold data>, <set Function, can be given any name>] = usestate(<type of variable to hold data>)
  //
  let [productList, setProductList] = useState(products);
  //creating new state for total amount
  let [totalAmount, setTotalAmount] = useState(0);

  //Total amount will change when any of the two below function changes
  //so we will define in both of them
  const incrementQuantity = (index) => {
    //to change let create first the copy of variable array needs to be change
    let newProductList = [...productList];
    //increase the quantity
    newProductList[index].quantity++;
    //passing this will update the variable passed to increment function
    setProductList(newProductList);

    //new amount again follow state change thing; first copy in new; then update
    let newtotalAmount = totalAmount;
    newtotalAmount += newProductList[index].price;

    //update total amount
    setTotalAmount(newtotalAmount);
  };
  const decrementQuantity = (index) => {
    //to change let create first the copy of variable array needs to be change
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    //decrease the quantity
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newtotalAmount -= newProductList[index].price;
    }
    //passing this will update the variable passed to increment function
    setProductList(newProductList);
    setTotalAmount(newtotalAmount);
  };

  const resetQuantity = () => {
    //making all products quantity zero
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    //setTotalAmount directly changes totalAmount as declared above
    setTotalAmount(0);
  };

  //Removes this item from product list
  const removeItem = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    //we need to remove price of all quantities so
    newtotalAmount -=
      newProductList[index].price * newProductList[index].quantity;
    setTotalAmount(newtotalAmount);
    //splice(start: number, deleteCount?: number | undefined): { price: number; name: string; quantity: number; }[]
    //The number of elements to remove.
    //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
    //@returns — An array containing the elements that were deleted.
    newProductList.splice(index, 1);
    setProductList(newProductList);
  };

  //Function to add a item
  const addItem = (name, price) => {
    let newProductList = [...productList];
    //push to add item to array
    newProductList.push({
      name: name,
      price: price,
      quantity: 0,
    });
    setProductList(newProductList);
  };
  return (
    //Call the function NavBar using the tag
    <>
      <Navbar />
      {/* Passing the above list of product to ProductList component using another variable name as product also in { } braces */}
      {/* To give our UI a better appearance, wrap it in a container class */}
      <main className="container">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          //passing to functions
          removeItem={removeItem}
        />
      </main>
      {/* passing total amount to footer to display */}
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
