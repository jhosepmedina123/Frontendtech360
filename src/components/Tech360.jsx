import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom"; 
import { AiFillCalendar } from "react-icons/ai"; 
import { FaHouseChimney } from "react-icons/fa6"; 
import { IoPeople } from "react-icons/io5"; 
import { FaListCheck } from "react-icons/fa6"; 
import { FaRegCalendarAlt } from "react-icons/fa"; 
import { FaPersonCircleCheck } from "react-icons/fa6"; 
import { PiNutBold } from "react-icons/pi"; 
import { GiClothes } from "react-icons/gi"; 

import styles from "../styles/Seguimiento.module.css"; 

const Tech = () => {
  const [expanded, setExpanded] = useState(false); 

  return (
    <div className={styles.parent}>
      {/* Barra lateral con 8 botones como enlaces (div1) */}
      <div
        className={`${styles.div1} ${expanded ? styles.expanded : ""}`}
        onMouseEnter={() => setExpanded(true)} 
        onMouseLeave={() => setExpanded(false)} 
      >
        <Link to="/tech360">
          <button>
            <FaHouseChimney />
            {expanded && <span>Inicio</span>}
          </button>
        </Link>
        <Link to="/Seguimiento">
          <button>
            <AiFillCalendar />
            {expanded && <span>Seguimiento</span>}
          </button>
        </Link>
        <Link to="/clientes">
          <button>
            <IoPeople />
            {expanded && <span>Clientes</span>}
          </button>
        </Link>
        <Link to="/otros">
          <button>
            <FaListCheck />
            {expanded && <span>Pedidos</span>}
          </button>
        </Link>
        <button>
          <FaRegCalendarAlt />
          {expanded && <span>Calendario</span>}
        </button>
        <button>
          <FaPersonCircleCheck />
          {expanded && <span>Operario</span>}
        </button>
        <button>
          <PiNutBold />
          {expanded && <span>Ajustes</span>}
        </button>
        <button>
          <GiClothes />
          {expanded && <span>Inventario</span>}
        </button>
      </div>

      {/* Contenido principal (div2) */}
      <div className={styles.div2}>
        <div className={styles.divc1}>Divc1</div>
        <div className={styles.divc2}>Divc2</div>
        <div className={styles.divc3}>Divc3</div>
        <div className={styles.divc4}>Divc4</div>
        <div className={styles.divc5}>Divc5</div>
      </div>

      {/* Contenido de div3 */}
      <div className={styles.div3}>
        <div className={styles.divd1}>Divd1</div>
        <div className={styles.divd2}>Divd2</div>
        <div className={styles.divd3}>Divd3</div>
      </div>
    </div>
  );
};

export default Tech;