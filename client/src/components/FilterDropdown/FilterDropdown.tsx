import React, { Fragment } from "react";
import styles from "./FilterDropdown.module.scss";
import FilterOption from "@/components/FilterOption/FilterOption.tsx";

interface FilterDropdownProps {
  data: { value: string; label: string }[];
  labelFor: string;
  labelText: string;
  change: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
  
function FilterDropdown(props: FilterDropdownProps) {
  const option = props.data.map((item, i: number) => {
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
