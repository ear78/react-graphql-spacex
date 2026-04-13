import { useState } from "react";
// import { useQuery } from "@apollo/client/react";
// import { Get_Launches } from "@/queries/schema.js";
import Launches from "@/components/Launches/Launches.tsx";
import Logo from "@/components/Logo/Logo.tsx";
import FilterRow from "@/components/FilterRow/FilterRow.tsx";
import styles from "./App.module.scss";
import "./App.css";

function App() {
  const [currentFilter, setCurrentFilter] = useState("All Launches");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setCurrentFilter(val);
  };

  return (
    <>
      <div className={styles.App}>
        <div className={styles.BgImage}>
          <Logo />
          <h1>Launches</h1>
        </div>

        <div className="container">
          <FilterRow bootClass="row" change={handleChange} />
          <Launches filter={currentFilter} />
        </div>
      </div>
    </>
  );
}

export default App;
