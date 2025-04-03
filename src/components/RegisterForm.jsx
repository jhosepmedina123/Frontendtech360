import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/FormStyles.module.css"; 
import logo from "../assets/logotech360.png";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name, "Last Name:", lastName, "Email:", email, "Password:", password);
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      {/* Sección del formulario */}
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Registro</h1>
        <p className={styles.subtitle}>Create your account in a seconds</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <input 
            type="text" 
            placeholder="First Name:" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className={styles.input} 
            required 
          />
          
          <input 
            type="text" 
            placeholder="Last Name:" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            className={styles.input} 
            required 
          />
          
          <input 
            type="email" 
            placeholder="Email Address:" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className={styles.input} 
            required 
          />
          
          <input 
            type="password" 
            placeholder="Create Password:" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className={styles.input} 
            required 
          />
          
          <button type="submit" className={styles.button}>Crear Cuenta</button>
        </form>
      </div>

      {/* Logo al lado derecho */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="Tech 360" className={styles.logo} />
      </div>
    </div>
  );
};

export default RegisterForm;
