import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoTech360 from "../assets/logotech360.png";
import styles from "../styles/WelcomeStyles.module.css";

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, [navigate]);

  return (
    <div className={styles.contenedor}> {/* Aplica la clase de CSS Modules */}
      <img src={logoTech360} alt="Logo Tech360" className={styles.logo} />  
      <p className={styles.texto}>Iniciando ...</p>
    </div>
  );
};

export default Welcome;
