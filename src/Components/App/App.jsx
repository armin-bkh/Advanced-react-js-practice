import ProductsProvider from "../Context/Providers/ProductsProvider";
import Users from "../Custom hooks/Users";
import Filter from "../Filter/Filter";
import NavBar from "../Navbar/NavBar";
import ProductList from "../ProductList/ProductList";
import styles from "./App.module.scss";

const App = () => {
  return (
    <ProductsProvider>
      <div className={styles.AppContainer}>
        <NavBar />
        <Filter />
        <ProductList />
      </div>
    </ProductsProvider>
    // <Users />
  );
};

export default App;
