import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/FormStyles.module.css"; 
import logo from "../assets/logotech360.png"; 

const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email para recuperar:", email);
    navigate("/new-password");
  };

  return (
    <div className={styles.container}>
      {/* Sección izquierda (Formulario) */}
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Recuperar Contraseña</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
          />
          <button type="submit" className={styles.button}>Enviar</button>
        </form>
      </div>

      {/* Sección derecha (Logo) */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="TECH 360 Logo" className={styles.logo} />
      </div>
    </div>
  );
};

export default RecoverPassword;
