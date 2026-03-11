import { useState } from "react";
import styles from "./Launches.module.scss";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import LaunchItem from "@/components/LaunchItem/LaunchItem.tsx";
import LaunchModal from "@/components/LaunchModal/LaunchModal.tsx";
import Spinner from "@/components/Spinner/Spinner.tsx";
// import FilterRow from '@/components/FilterRow/FilterRow.tsx';
import filtering from "@/assets/js/filtering.js";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
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

interface LaunchData {
  launches: {
    flight_number: number;
    mission_name: string;
    launch_date_local: string;
    launch_success: boolean;
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
  }[];
}

interface LaunchesProps {
  filter: string;
}

const Launches = (props: LaunchesProps) => {
  const { loading, error, data } = useQuery<LaunchData>(LAUNCHES_QUERY);
  // const [currentFilterData, setCurrentFilterData] = useState([]);
  const [{ currentLaunch, isModalActive }, setCurrentLaunch] = useState<{
    currentLaunch: number | null;
    isModalActive: boolean;
  }>({
    currentLaunch: null,
    isModalActive: false,
  });

  if (loading) return <Spinner />;
  if (error) return <p>Error :(</p>;

  const filterData = filtering(data?.launches, props.filter);

  /*
   * Main Filtering function takes a data arg and the filter type arg. Found in /assets/* js.
   * @params - appData <Array>
   * @params - filterType <String>
   */

  const launch = filterData.map((launch: LaunchData["launches"][0]) => {
    return (
      <LaunchItem
        click={() =>
          setCurrentLaunch({
            currentLaunch: launch.flight_number,
            isModalActive: true,
          })
        }
        key={launch.flight_number}
        data={launch}
      />
    );
  });

  let launchModal;
  if (isModalActive) {
    launchModal = (
      <LaunchModal
        click={() =>
          setCurrentLaunch({ isModalActive: false, currentLaunch: null })
        }
        setModal={isModalActive}
        selectedLaunch={currentLaunch}
      />
    );
  } else {
    launchModal = null;
  }

  return (
    <>
      <div className={styles.Launches}>{launch}</div>
      {launchModal}
    </>
  );
};

export default Launches;
