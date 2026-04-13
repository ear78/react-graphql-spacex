import styles from "./LaunchItem.module.scss";

interface LaunchItemProps {
  click: () => void;
  data: {
    flight_number: number;
    mission_name: string;
    launch_date_local: string;
    launch_success: boolean;
    links: {
      mission_patch: string;
    };
  };
}

const LaunchItem = ({
  click,
  data: {
    flight_number,
    mission_name,
    launch_date_local,
    launch_success,
    links: { mission_patch },
  },
}: LaunchItemProps) => {
  return (
    <div
      key={flight_number}
      className={`${styles.LaunchItem} ${launch_success ? styles.Success : styles.Failed}`}
    >
      <div className={styles.Details}>
        <img
          src={mission_patch}
          alt={`${mission_name} mission patch`}
          width={300}
          loading="lazy"
        />
        <h5>
          Mission Name: <span>{mission_name}</span>
        </h5>
        <p className={styles.ItemTitle}>
          Flight: <span>#{flight_number}</span>
        </p>
        <p className={styles.ItemTitle}>
          Launch Status: <span>{launch_success ? "Success" : "Failed"}</span>
          <span
            className={`${launch_success ? styles.success : styles.failed}`}
          ></span>
        </p>

        <p className={styles.ItemTitle}>
          Launch Date:{" "}
          <span>{new Date(launch_date_local).toLocaleString()}</span>
        </p>
      </div>
      <div className="">
        <button onClick={click} className={styles.ItemButton}>
          Launch Details
        </button>
      </div>
    </div>
  );
};

export default LaunchItem;
