import React, { Component, useState } from "react";
import NavBar from "../Navbar/NavBar";
import ProductList from "../ProductList/ProductList";
import styles from "./App.module.scss";

class App extends Component {
  state = {
    product: [
      { name: "React-js", price: "98 $", id: 1, quantity: 1 },
      { name: "Node-js", price: "88 $", id: 2, quantity: 2 },
      { name: "JavaScript", price: "78 $", id: 3, quantity: 3 },
    ],
  };

  componentDidMount(){
    console.log("App.jsx DidMount");
  }
  componentDidUpdate(prevProps, prevState){
    console.log("App.jsx DidUpdate", prevState);
  }

  deleteHandler = (id) => {
    const newList = this.state.product.filter((el) => el.id !== id);
    this.setState({ product: newList });
  };
  incrementHandler = (id) => {
    const selectElement = this.state.product.findIndex((el) => el.id === id);
    const product = {...this.state.product[selectElement]};
    product.quantity++;
    const products = [...this.state.product];
    products[selectElement] = product;
    this.setState({
      product: products,
    })
  };
  decrementHandler = (id) => {
    const selectedElement = this.state.product.findIndex((el) => el.id === id);
    const product = {...this.state.product[selectedElement]};
    const products = [...this.state.product];
    product.quantity--;
    if (product.quantity === 0) {
      const newList = this.state.product.filter((el) => el.id !== id);
      this.setState({ product: newList });
    } else {
      products[selectedElement] = product;
      this.setState({ product: products });
    }
  };
  changeHanlder = (e, id) => {
    const selectElement = this.state.product.findIndex((el) => el.id === id);
    const product = {...this.state.product[selectElement]};
    const products = [...this.state.product];
    product.name = e.target.value;
    products[selectElement] = product;
    this.setState({ product: products });
  };
  render() {
    return (
      <div className={styles.AppContainer}>
        <NavBar products={this.state.product.length} />
        <ProductList
          onDelete={this.deleteHandler}
          onIncrement={this.incrementHandler}
          onDecrement={this.decrementHandler}
          onChange={this.changeHanlder}
          product={this.state.product}
        />
      </div>
    );
  }
}

export default App;
