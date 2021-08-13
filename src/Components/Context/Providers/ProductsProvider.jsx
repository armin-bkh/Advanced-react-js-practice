import { useContext, useEffect, useState, useReducer } from "react";
import { ProductsContext, ProductsDispatcherContext } from "../ProductsContext";
import { productsData } from '../../../db/products';
import _ from 'lodash';
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
      const value = action.event.value;
      if(value === "") return productsData
      else {
        const updatedProducts = productsData.filter(el => el.availableSizes.indexOf(value) >= 0)
        return updatedProducts;
      } 
    }
    case "sort": {
      const value = action.event.value;
      const products = [...state];
      if( value === "") return products
      if( value === "highest" ){
        return _.orderBy(products, ["price"], ["desc"])
      }else {
        return _.orderBy(products, ["price"], ["asc"])
      }
    }
    case "search": {
      const value = action.event.target.value;
      if(value === "") return productsData;
      const products = [...state];
      // const updatedProducts = products.filter(el => el.title.indexOf(value) >= 0)
      const updatedProducts = products.filter(el => el.title.toLowerCase().includes(value.toLowerCase()));
      return updatedProducts;
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

  // const changeHanlder = (e, id) => {
  //   dispatch({type: 'change', id: id, event: e})
  // };

  const filterHandler = (selectedOption) =>{
    dispatch({type: 'filter', event: selectedOption});
  }

  const sortHandler = (selectedOption) =>{
    dispatch({type: 'sort', event: selectedOption})
  }

  const searchHandler = (e) =>{
    dispatch({type: 'search', event: e})
  }

  return { deleteHandler, incrementHandler, decrementHandler, filterHandler, sortHandler, searchHandler };
};
