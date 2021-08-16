import { useState } from 'react';
import { useProductsActions } from '../../Components/Context/Providers/ProductsProvider';
import styles from './SearchBar.module.scss'; 
const SearchBar = ({filterState, sortState}) => {
    const [value, setValue] = useState("");
    const { sortHandler ,filterHandler, searchHandler } = useProductsActions();
    const changeHandler = (e) =>{
        setValue(e.target.value);
        filterHandler(filterState);
        sortHandler(sortState);
        searchHandler(e);
    }   
    return ( 
        <div className={styles.searchBarContainer}>
            <label className={styles.searchBarLbl} htmlFor="searchBar">Search:</label>
            <input className={styles.searchBar} id="searchBar" type="text" placeholder="search..." value={value} onChange={changeHandler} />
        </div>
     );
}
 
export default SearchBar;