import styles from "./FilterRow.module.scss";
import FilterDropdown from "@/components/FilterDropdown/FilterDropdown.tsx";

interface FilterRowProps {
  bootClass: string;
  change: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function FilterRow(props: FilterRowProps) {
    const launches = [
      "All Launches",
      "Failed Launches",
      "Successful Launches",
      "Falcon 1",
      "Falcon 9",
      "Falcon Heavy",
    ];

  return (
    <div className={`${props.bootClass} ${styles.FilterRow}`}>
      {/* <div className="col-12 col-md-6"> */}
        <FilterDropdown
          data={launches}
          labelFor="launch-filter"
          labelText="Filter Launches"
          change={props.change}
        />
      {/* </div> */}
    </div>
  );
}

export default FilterRow;
