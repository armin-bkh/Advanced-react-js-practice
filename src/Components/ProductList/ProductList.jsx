import { useProducts, useProductsActions } from "../Context/Providers/ProductsProvider";
import Product from "../Product/Product";
import styles from "./ProductList.module.scss";

const ProductList = () => {
  const products = useProducts();
  const { deleteHandler, incrementHandler, decrementHandler} = useProductsActions();
  return (
    <ul className={styles.productlist}>
      {products.length ? (
        products.map((el) => (
          <Product
            key={el.id}
            properties={el}
            onIncrement={() => incrementHandler(el.id)}
            onDecrement={() => decrementHandler(el.id)}
            onDelete={() => deleteHandler(el.id)}
            // onChange={(e) => changeHanlder(e, el.id)}
          />
        ))
      ) : (
        <h1>there is no product in your cart</h1>
      )}
    </ul>
  );
};


// class ProductList extends Component{
//   componentDidMount(){
//     console.log("ProductList.jsx DidMount");
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log("ProductList.jsx DidUpdate");
    
//   }
//   render(){
//  const {onChange, onDecrement, onIncrement, onDelete, product} = this.props;
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
// }
// };

export default ProductList;
