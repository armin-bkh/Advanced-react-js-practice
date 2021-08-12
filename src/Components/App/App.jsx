import React, { useEffect, useState } from "react";
import ProductsProvider from "../Context/Providers/ProductsProvider";
import NavBar from "../Navbar/NavBar";
import ProductList from "../ProductList/ProductList";
import styles from "./App.module.scss";

const App = () => {
  return (
    <ProductsProvider>
      <div className={styles.AppContainer}>
        <NavBar />
        <ProductList />
      </div>
    </ProductsProvider>
  );
};

export default App;
