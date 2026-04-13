
interface FilterOptionProps {
  option: string;
}
function FilterOption(props: FilterOptionProps) {
  return <option value={props.option}>{props.option}</option>;
}

export default FilterOption;
