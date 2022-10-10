import React from "react";

class AddItem extends React.Component {
  //for taking input make this type of constructor
  constructor(props) {
    //pass to super
    super(props);
    //make a state like this
    this.state = {
      productname: "",
      productprice: 0,
    };

    //whenever there is a change in input in column, we need to change the state
  }
  //For react use htmlFor instead of for
  state = {};
  render() {
    return (
      <form
        className="row mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(this.state.productname, this.state.productprice);
        }}
      >
        <div className="mb-3 col-4">
          <label htmlFor="inputName">Name</label>
          <input
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productname"
            //here e means event listener
            //this is only way to pass input e.currentTarget.value
            //this.setState() here setState() is a inbuilt function
            onChange={(e) => {
              this.setState({ productname: e.currentTarget.value });
            }}
            value={this.state.productname}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice">Price</label>
          <input
            className="form-control"
            id="price"
            placeholder="Password"
            name="productprice"
            onChange={(e) => {
              this.setState({ productprice: Number(e.currentTarget.value) });
            }}
            value={this.state.productprice}
          />
        </div>
        <button type="submit" className="btn btn-primary col-4">
          Add
        </button>
      </form>
    );
  }
}

export default AddItem;
