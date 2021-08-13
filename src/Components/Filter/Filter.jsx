import { useState } from 'react';
import Select from 'react-select';
import { useProductsActions } from '../Context/Providers/ProductsProvider';

// const Options = [
//     {value: '', label: 'ALL'},
//     {value: 'S', label: 'S'},
//     {value: 'XS', label: 'XS'},
//     {value: 'M', label: 'M'},
//     {value: 'X', label: 'X'},
//     {value: 'XL', label: 'XL'},
//     {value: 'XXL', label: 'XXL'},
// ]

const Filter = () => {
    const [value, setValue] = useState("");
    const {filterHandler} = useProductsActions();
    const changeHandler = (e) =>{
        setValue(e.target.value);
        filterHandler(e);
    }
    return ( 
        <div>
        <label htmlFor="">Order By </label>
        <select value={value} onChange={changeHandler}>
            <option value="">All</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="X">X</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
        </select>
        </div>
     );
}
 
export default Filter;