import React, { useState } from "react";
import { Link } from "react-router-dom"; 
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
      {/* Barra lateral */}
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
        <Link to="/seguimiento">
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
        <Link to="/pedidos">
          <button>
            <FaListCheck />
            {expanded && <span>Pedidos</span>}
          </button>
        </Link>
        <Link to="/calendario">
          <button>
            <FaRegCalendarAlt />
            {expanded && <span>Calendario</span>}
          </button>
        </Link>
        <Link to="/operarios">
          <button>
            <FaPersonCircleCheck />
            {expanded && <span>Operario</span>}
          </button>
        </Link>
        <Link to="/ajustes">
          <button>
            <PiNutBold />
            {expanded && <span>Ajustes</span>}
          </button>
        </Link>
        <Link to="/inventario">
          <button>
            <GiClothes />
            {expanded && <span>Inventario</span>}
          </button>
        </Link>
      </div>

      {/* Contenedor de contenido principal */}
      <div className={styles.parent2}>
        {/* Sección de contenido */}
        <div className={styles.div4}>
          <div className={styles.divS1}>Encabezado</div>
          <div className={styles.divS2}>Contenido principal</div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
