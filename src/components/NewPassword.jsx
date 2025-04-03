import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/FormStyles.module.css"; 
import logo from "../assets/logotech360.png"; 

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log("Nueva contraseña:", password);
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      {/* Sección del formulario a la izquierda */}
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Nueva Contraseña</h1>
        <p className={styles.subtitle}>Restablece tu contraseña de manera segura</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="password"
            placeholder="Nueva Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>Actualizar</button>
        </form>
      </div>

      {/* Logo a la derecha */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="Tech 360" className={styles.logo} />
      </div>
    </div>
  );
};

export default NewPassword;
