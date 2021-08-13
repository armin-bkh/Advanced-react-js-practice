import { useState } from 'react';
import { useProductsActions } from '../../Components/Context/Providers/ProductsProvider';
import styles from './SearchBar.module.scss'; 
const SearchBar = () => {
    const [value, setValue] = useState("");
    const { searchHandler } = useProductsActions();
    const changeHandler = (e) =>{
        setValue(e.target.value)
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