import React, { useEffect, useState } from "react";
import SearchBar from "../../common/SeacrhBar/SearchBar";
import ProductsProvider from "../Context/Providers/ProductsProvider";
import Filter from "../Filter/Filter";
import NavBar from "../Navbar/NavBar";
import ProductList from "../ProductList/ProductList";
import styles from "./App.module.scss";

const App = () => {
  return (
    <ProductsProvider>
      <div className={styles.AppContainer}>
        <NavBar />
        <SearchBar />
        <Filter />
        <ProductList />
      </div>
    </ProductsProvider>
  );
};

export default App;
