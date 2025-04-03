import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/FormStyles.module.css"; 
import logo from "../assets/logotech360.png"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuario autenticado, redirigiendo a Tech360...");
    navigate("/tech360"); // Redirige a Tech360 después del login
  };

  return (
    <div className={styles.container}>
      {/* Sección izquierda (Formulario) */}
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Inicio de Sesión</h1>
        <p className={styles.subtitle}>Login your account in a seconds</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          
          <Link to="/recover-password" className={styles.forgotPassword}>
            ¿Olvidaste tu contraseña?
          </Link>
          
          <button type="submit" className={styles.button}>Log in</button>
        </form>

        <p className={styles.registerText}>
          <span>¿No tienes cuenta? </span>
          <Link to="/register">Registrarse</Link>
        </p>
      </div>

      {/* Sección derecha (Logo) */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="TECH 360 Logo" className={styles.logo} />
      </div>
    </div>
  );
};

export default Login;
