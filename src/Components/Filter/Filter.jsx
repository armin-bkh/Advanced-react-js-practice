import { useState } from "react";
import Select from "react-select";
import SelectBox from "../../common/SelectBox/SelectBox";
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

const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];

const Filter = () => {
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("");
  const { filterHandler, sortHandler } = useProductsActions();

  const changeFilterHandler = (selectedOption) => {
    setValue(selectedOption);
    filterHandler(selectedOption);
    sortHandler(sort);
  };

  const changeSortHandler = (selectedOption) => {
    setSort(selectedOption);
    sortHandler(selectedOption);
  };

  return (
    <div className={styles.filterContainer}>
      <h1>Sopping App</h1>
      <div className={styles.filters}>
        {/* <select className={styles.filterProduct} id="filterProduct" value={value} onChange={changeHandler}>
            <option value="">All</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="X">X</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
        </select> */}
        {/* <label className={styles.filterLbl} htmlFor="filterProduct">
          Order By
        </label>
        <Select
          className={styles.filterProduct}
          id="filterProduct"
          value={value}
          onChange={changeFilterHandler}
          options={Options}
        /> */}
        <SelectBox
          title="Order By"
          htmlFor="filterProduct"
          id="filterProduct"
          value={value}
          onChange={changeFilterHandler}
          options={Options}
        />
        {/*<label className={styles.filterLbl} htmlFor="sortProduct">
          sort By
        </label>
         <Select
          className={styles.filterProduct}
          id="sortProduct"
          value={sort}
          onChange={changeSortHandler}
          options={sortOptions}
        /> */}
        <SelectBox
          title="Sort By"
          htmlFor="sortProduct"
          id="sortProduct"
          value={sort}
          onChange={changeSortHandler}
          options={sortOptions}
        />
      </div>
    </div>
  );
};

export default Filter;
