import React, { Component, useState } from "react";
import Product from "../Product/Product";
import styles from "./ProductList.module.scss";

// const ProductList = ({onChange, onDecrement, onIncrement, onDelete, product}) => {
 
//   return (
//     <ul className={styles.productlist}>
//       <h1 className={styles.title}>Shopping App</h1>
//       {product.length ? (
//         product.map((el) => (
//           <Product
//             key={el.id}
//             properties={el}
//             onIncrement={() => onIncrement(el.id)}
//             onDecrement={() => onDecrement(el.id)}
//             onDelete={() => onDelete(el.id)}
//             onChange={(e) => onChange(e, el.id)}
//           />
//         ))
//       ) : (
//         <h1>there is no product in your cart</h1>
//       )}
//     </ul>
//   );
// };


class ProductList extends Component{
  componentDidMount(){
    console.log("ProductList.jsx DidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("ProductList.jsx DidUpdate");
    
  }
  render(){
 const {onChange, onDecrement, onIncrement, onDelete, product} = this.props;
  return (
    <ul className={styles.productlist}>
      <h1 className={styles.title}>Shopping App</h1>
      {product.length ? (
        product.map((el) => (
          <Product
            key={el.id}
            properties={el}
            onIncrement={() => onIncrement(el.id)}
            onDecrement={() => onDecrement(el.id)}
            onDelete={() => onDelete(el.id)}
            onChange={(e) => onChange(e, el.id)}
          />
        ))
      ) : (
        <h1>there is no product in your cart</h1>
      )}
    </ul>
  );
}
};

export default ProductList;
