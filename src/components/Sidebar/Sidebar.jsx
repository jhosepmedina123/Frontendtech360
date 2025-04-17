import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCalendar } from "react-icons/ai";
import { FaHouseChimney, FaListCheck, FaPersonCircleCheck } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { PiNutBold } from "react-icons/pi";
import { GiClothes } from "react-icons/gi";

import logo from "../../assets/logotech360.png"; 
import sidebarStyles from "./Sidebar.module.css";


const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${sidebarStyles.sidebar} ${expanded ? sidebarStyles.expanded : ""}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Logo encima del primer botón */}
      <div className={sidebarStyles.logoContainer}>
        <img src={logo} alt="TECH 360 Logo" className={sidebarStyles.logo} />
      </div>

      <Link to="/tech360">
        <button className={sidebarStyles.button}>
          <FaHouseChimney />
          {expanded && <span>Inicio</span>}
        </button>
      </Link>

      <Link to="/seguimiento">
        <button className={sidebarStyles.button}>
          <AiFillCalendar />
          {expanded && <span>Seguimiento</span>}
        </button>
      </Link>

      <Link to="/clientes">
        <button className={sidebarStyles.button}>
          <IoPeople />
          {expanded && <span>Clientes</span>}
        </button>
      </Link>

      <Link to="/pedidos">
        <button className={sidebarStyles.button}>
          <FaListCheck />
          {expanded && <span>Pedidos</span>}
        </button>
      </Link>

      <Link to="/calendario">
        <button className={sidebarStyles.button}>
          <FaRegCalendarAlt />
          {expanded && <span>Calendario</span>}
        </button>
      </Link>

      <Link to="/operario">
        <button className={sidebarStyles.button}>
          <FaPersonCircleCheck />
          {expanded && <span>Operario</span>}
        </button>
      </Link>

      <Link to="/ajustes">
        <button className={sidebarStyles.button}>
          <PiNutBold />
          {expanded && <span>Ajustes</span>}
        </button>
      </Link>

      <Link to="/inventario">
        <button className={sidebarStyles.button}>
          <GiClothes />
          {expanded && <span>Inventario</span>}
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
