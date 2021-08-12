import React, { Component } from "react";
import styles from "./Product.module.scss";
import {BiTrash} from 'react-icons/bi';

const Product = ({
  properties,
  onDelete,
  onIncrement,
  onDecrement,
  onChange,
}) => {
  return (
    <li className={styles.product}>
      <p>product name: {properties.name}</p>
      <p>product price: {properties.price}</p>
      <span className={styles.badge}>{properties.quantity}</span>
      <input
        className={styles.input}
        type="text"
        value={properties.name}
        onChange={onChange}
      />
      <button
        className={`${styles.btn} ${properties.quantity === 1 && styles.warning}`}
        type="button"
        onClick={onDecrement}
      >
        {properties.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button
        className={`${styles.btn} ${styles.inc}`}
        type="button"
        onClick={onIncrement}
      >
        +
      </button>
      <button className={styles.btn} type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

// class Product extends Component{
//   componentWillUnmount(){
//     console.log("Product.jsx WillUnmount")
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log("Product.jsx DidUpdate")
//   }
//   componentDidMount(){
//     console.log("Product.jsx DidMount")

//   }
//   render(){
//   const {properties, onChange, onDecrement, onIncrement, onDelete} = this.props;
//   return (
//     <li className={styles.product}>
//       <p>product name: {properties.name}</p>
//       <p>product price: {properties.price}</p>
//       <span className={styles.badge}>{properties.quantity}</span>
//       <input
//         className={styles.input}
//         type="text"
//         value={properties.name}
//         onChange={onChange}
//       />
//       <button
//         className={`${styles.btn} ${properties.quantity === 1 && styles.warning}`}
//         type="button"
//         onClick={onDecrement}
//       >
//         {properties.quantity > 1 ? "-" : <BiTrash />}
//       </button>
//       <button
//         className={`${styles.btn} ${styles.inc}`}
//         type="button"
//         onClick={onIncrement}
//       >
//         +
//       </button>
//       <button className={styles.btn} type="button" onClick={onDelete}>
//         Delete
//       </button>
//     </li>
//   );
// }
// }


export default Product;
