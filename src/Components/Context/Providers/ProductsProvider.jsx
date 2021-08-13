import { useContext, useEffect, useState, useReducer } from "react";
import { ProductsContext, ProductsDispatcherContext } from "../ProductsContext";
import { productsData } from '../../../db/products';
// const initialState = [
//   { title: "React-js", price: "98 $", id: 1, quantity: 1 },
//   { title: "Node-js", price: "88 $", id: 2, quantity: 2 },
//   { title: "JavaScript", price: "78 $", id: 3, quantity: 3 },
// ];

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const selectElement = state.findIndex((el) => el.id === action.id);
      const product = { ...state[selectElement] };
      product.quantity++;
      const updatedProducts = [...state];
      updatedProducts[selectElement] = product;
      return updatedProducts;
    }
    case "decrement": {
      const selectedElement = state.findIndex((el) => el.id === action.id);
      const product = { ...state[selectedElement] };
      const updatedProducts = [...state];
      product.quantity--;
      if (product.quantity === 0) {
        const newList = state.filter((el) => el.id !== action.id);
        return newList;
      } else {
        updatedProducts[selectedElement] = product;
        return updatedProducts;
      }
    }
    case "change": {
      const selectElement = state.findIndex((el) => el.id === action.id);
      const product = { ...state[selectElement] };
      product.name = action.event.target.value;
      const updatedProducts = [...state];
      updatedProducts[selectElement] = product;
      return updatedProducts;
    }
    case "delete": {
      const newList = state.filter((el) => el.id !== action.id);
      return newList;
    }
    case "filter": {
      if(action.event.target.value === "") return productsData
      else {
        const updatedProducts = productsData.filter(el => el.availableSizes.indexOf(action.event.target.value) >= 0)
        return updatedProducts;
      } 
    }
    default:
      return state;
  }
};
const ProductsProvider = ({ children }) => {
  // const [products, setProducts] = useState([
  //   { name: "React-js", price: "98 $", id: 1, quantity: 1 },
  //   { name: "Node-js", price: "88 $", id: 2, quantity: 2 },
  //   { name: "JavaScript", price: "78 $", id: 3, quantity: 3 },
  // ]);

  const [products, dispacth] = useReducer(reducer, productsData);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <ProductsContext.Provider value={products}>
      <ProductsDispatcherContext.Provider value={dispacth}>
        {children}
      </ProductsDispatcherContext.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsActions = () => {
  // const products = useContext(ProductsContext);
  const dispatch = useContext(ProductsDispatcherContext);

  const deleteHandler = (id) => {
    dispatch({type: 'delete', id: id})
  };

  const incrementHandler = (id) => {
    dispatch({type: 'increment', id: id})
  };

  const decrementHandler = (id) => {
    dispatch({type: 'decrement', id: id})
  };

  const changeHanlder = (e, id) => {
    dispatch({type: 'change', id: id, event: e})
  };

  const filterHandler = (e) =>{
    dispatch({type: 'filter', event: e});
  }

  return { deleteHandler, incrementHandler, decrementHandler, changeHanlder, filterHandler };
};
