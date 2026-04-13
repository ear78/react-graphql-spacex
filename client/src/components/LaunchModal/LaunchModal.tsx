import styles from "./LaunchModal.module.scss";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Spinner from "@/components/Spinner/Spinner.tsx";
import { useEffect } from "react";
interface LaunchModalProps {
  click: () => void;
  setModal: boolean;
  selectedLaunch: number | null;
}

interface LaunchData {
  launch: {
    flight_number: number;
    mission_name: string;
    launch_date_local: string;
    launch_success: boolean;
    details: string;
    launch_site: {
      site_name_long: string;
    };
    rocket: {
      rocket_type: string;
      rocket_name: string;
    };
    links: {
      mission_patch: string;
    };
  };
}

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_date_local
      launch_success
      details
      launch_site {
        site_name_long
      }
      rocket {
        rocket_type
        rocket_name
      }
      links {
        mission_patch
      }
    }
  }
`;

const LaunchModal = ({ click, setModal, selectedLaunch }: LaunchModalProps) => {

  useEffect(() => {
    document.body.style.overflow = setModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [setModal]);
  
  const flight_number = selectedLaunch;
  const { loading, error, data } = useQuery<LaunchData>(LAUNCH_QUERY, {
    variables: { flight_number },
  });

  if (error) return <p>Error : {error.message}</p>;
  if (loading) {
    return (
      <div className={`${styles.LaunchModal} ${setModal ? styles.Active : ""}`}>
        <div className={`${styles.InnerCard} ${styles.Loading}`}>
          <Spinner small />
        </div>
      </div>
    );
  } else if (data) {
    return (
      <div className={`${styles.LaunchModal} ${setModal ? styles.Active : ""}`}>
        <div className={`${styles.InnerCard}`}>
          <FontAwesomeIcon
            className={styles.Svg}
            onClick={click}
            icon={faXmark}
          />
          <div className={styles.TopContainer}>
            <img
              className={styles.ImagePatch}
              src={data?.launch.links.mission_patch}
              alt={`${data?.launch.rocket.rocket_name} ${data?.launch.mission_name}`}
              width={300}
            />

            <div className={styles.TopDetails}>
              <h3 className={styles.Title}>
                Flight: #{data.launch.flight_number}
              </h3>
              <p>
                <span className={styles.DetailsTitle}>Mission Name:</span>{" "}
                {data.launch.mission_name}
              </p>
              <p>
                <span className={styles.DetailsTitle}>Rocket Name:</span>{" "}
                {data.launch.rocket.rocket_name}
              </p>
              <p>
                <span className={styles.DetailsTitle}>Rocket Type:</span>{" "}
                {data.launch.rocket.rocket_type}
              </p>
            </div>
          </div>

          <div className={styles.BottomContainer}>
            <h3>Launch Details</h3>
            <p className={styles.Details}>
              <span className={styles.DetailsTitle}>Details:</span>{" "}
              <br/>
              {data.launch.details}
            </p>
            <p className={styles.Details}>
              <span className={styles.DetailsTitle}>Site Launch Location:</span>{" "}
              <br/>
              {data.launch.launch_site.site_name_long}
            </p>
            <p className={styles.Details}>
              <span className={styles.DetailsTitle}>Launch Status:</span>{" "}
              <br/>
              {data.launch.launch_success ? "Success" : "Failed"}
              <span
                className={`${data.launch.launch_success ? styles.success : styles.failed}`}
              ></span>
            </p>
            <p className={styles.Details}>
              <span className={styles.DetailsTitle}>Launch Date:</span>{" "}
              <br/>
              {new Date(data.launch.launch_date_local).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default LaunchModal;
