
interface FilterOptionProps {
  option: { value: string; label: string };
}
function FilterOption(props: FilterOptionProps) {
  return <option value={props.option.value}>{props.option.label}</option>;
}

export default FilterOption;
