import React, { useState } from "react";
import styles from "./Tech360.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Status from "./divs/Status";
import ClientManagement from "./divs/ClientManagement";

const Tech = () => {
  const [expanded, setExpanded] = useState(false); 

  return (
    <div className={styles.body}>
      <Sidebar />
        <div className={styles.content}>
        <div className={styles.div2}>INICIO</div>
        <div className={styles.div4}></div>
        <div className={styles.div5}>5</div>
        <div className={styles.div6}>6</div>
        <ClientManagement />
        <Status />
      </div>
    </div>
  );

};

export default Tech;