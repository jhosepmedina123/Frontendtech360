import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import RegisterForm from "./components/RegisterForm";
import RecoverPassword from "./components/RecoverPassword";
import NewPassword from "./components/NewPassword";
import Tech from "./components/Tech360/Tech360"; 
import Seguimiento from "./components/Seguimiento/Seguimiento";
import Calendario from "./components/Calendario/Calendario";
import Ajustes from "./components/Ajustes/Ajustes";
import Clientes from "./components/Clientes/Clientes";
import DetallesP from "./components/DetallesPedido/DetallesP";
import Operarios from "./components/Operarios/Operarios";
import Pedidos from "./components/Pedidos/Pedidos";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/sidebar" element={<Sidebar/>}/>
        <Route path="/tech360" element={<Tech />} /> 
        <Route path="/seguimiento" element={<Seguimiento />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/ajustes" element={<Ajustes />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/detalles-producto" element={<DetallesP />} />
        <Route path="/operarios" element={<Operarios />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>
    </Router>
  );
};

export default App;
