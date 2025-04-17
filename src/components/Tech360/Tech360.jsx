import React, { useState } from "react";
import styles from "./Tech360.module.css";
import sidebarStyles from "../Sidebar/Sidebar.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Status from "./divs/Status";

const Tech = () => {
  const [expanded, setExpanded] = useState(false); 

  return (
    <div className={styles.body}>
      {/* Barra lateral */}
      <div className={sidebarStyles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <div className={styles.div2}>INICIO</div>
        <div className={styles.div4}>4</div>
        <div className={styles.div5}>5</div>
        <div className={styles.div6}>6</div>
        <div className={styles.div7}>7</div>
        
        {/* Renderizando el componente Status aquí */}
        <Status />
      </div>
    </div>
  );
};

export default Tech;