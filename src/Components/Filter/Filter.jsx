import { useState } from "react";
import Select from "react-select";
import { useProductsActions } from "../Context/Providers/ProductsProvider";
import styles from "./Filter.module.scss";

const Options = [
  { value: "", label: "ALL" },
  { value: "S", label: "S" },
  { value: "XS", label: "XS" },
  { value: "M", label: "M" },
  { value: "X", label: "X" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

const Filter = () => {
  const [value, setValue] = useState("");
  const { filterHandler } = useProductsActions();

  const changeHandler = (selectedOption) => {
    setValue(selectedOption);
    filterHandler(selectedOption);
  };

  return (
    <div className={styles.filterContainer}>
      <h1>Sopping App</h1>
      <div>
        <label className={styles.filterLbl} htmlFor="filterProduct">
          Order By
        </label>
        {/* <select className={styles.filterProduct} id="filterProduct" value={value} onChange={changeHandler}>
            <option value="">All</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="X">X</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
        </select> */}
        <Select
          className={styles.filterProduct}
          id="filterProduct"
          value={value}
          onChange={changeHandler}
          options={Options}
        />
      </div>
    </div>
  );
};

export default Filter;
