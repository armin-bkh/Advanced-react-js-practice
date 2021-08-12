import { useContext, useEffect, useState } from "react";
import { ProductsContext, ProductsDispatcherContext } from "../ProductsContext";

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { name: "React-js", price: "98 $", id: 1, quantity: 1 },
    { name: "Node-js", price: "88 $", id: 2, quantity: 2 },
    { name: "JavaScript", price: "78 $", id: 3, quantity: 3 },
  ]);

  useEffect(()=>{
    console.log(products);
  }, [products])

  return (
    <ProductsContext.Provider value={products}>
      <ProductsDispatcherContext.Provider value={setProducts}>
        {children}
      </ProductsDispatcherContext.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsActions = () => {
  const products = useContext(ProductsContext);
  const setProducts = useContext(ProductsDispatcherContext);
  
  const deleteHandler = (id) => {
    const newList = products.filter((el) => el.id !== id);
    setProducts(newList);
  };

  const incrementHandler = (id) => {
    const selectElement = products.findIndex((el) => el.id === id);
    const product = { ...products[selectElement] };
    product.quantity++;
    const updatedProducts = [...products];
    updatedProducts[selectElement] = product;
    setProducts(updatedProducts);
  };

  const decrementHandler = (id) => {
    const selectedElement = products.findIndex((el) => el.id === id);
    const product = { ...products[selectedElement] };
    const updatedProducts = [...products];
    product.quantity--;
    if (product.quantity === 0) {
      const newList = products.filter((el) => el.id !== id);
      setProducts(newList);
    } else {
      updatedProducts[selectedElement] = product;
      setProducts(updatedProducts);
    }
  };

  const changeHanlder = (e, id) => {
    const selectElement = products.findIndex((el) => el.id === id);
    const product = { ...products[selectElement] };
    product.name = e.target.value;
    const updatedProducts = [...products];
    updatedProducts[selectElement] = product;
    setProducts(updatedProducts);
  };

  return { deleteHandler, incrementHandler, decrementHandler, changeHanlder };
};
