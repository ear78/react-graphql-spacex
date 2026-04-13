import styles from "./Spinner.module.scss";
interface SpinnerProps {
  small?: boolean;
}

const Spinner = (props: SpinnerProps) => {
  const smallSpinner = props.small ? styles.Small : "";

  return (
    <div className={`${styles.SpinnerBg} ${smallSpinner}`}>
      <div className={styles.Circle}></div>
    </div>
  );
};

export default Spinner;
