import { Fragment } from "react";
import styles from "./FilterDropdown.module.scss";
import FilterOption from "@/components/FilterOption/FilterOption.tsx";

function FilterDropdown(props) {
  const option = props.data.map((item: any, i: number) => {
    return <FilterOption key={i} option={item} />;
  });

  return (
    <Fragment>
      <label className={styles.Label} htmlFor={props.labelFor}>
        {props.labelText}
      </label>
      <select
        id={props.labelFor}
        className={styles.FilterDropdown}
        onChange={props.change}
      >
        {option}
      </select>
    </Fragment>
  );
}

export default FilterDropdown;
