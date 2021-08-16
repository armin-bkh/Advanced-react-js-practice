import Select from "react-select";
import styles from "./SelectBox.module.scss";
const SelectBox = ({ title, htmlFor, id, ...rest}) => {
  return (
    <div className={styles.SelectBox}>
      <label className={styles.selectLbl} htmlFor={htmlFor}>
        {title}
      </label>
      <Select
        className={styles.selectProduct}
        id={id}
        {...rest}
      />
    </div>
  );
};

export default SelectBox;
