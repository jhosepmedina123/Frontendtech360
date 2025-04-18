import React, { useState } from "react";
import styles from "./Status.module.css";

const Status = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Estados para cada campo
  const [deliveryDate, setDeliveryDate] = useState("2021-11-18T17:00");
  const [address, setAddress] = useState("Cll 21 San cristobal");
  const [price, setPrice] = useState(575000);

  const handleEditClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditing(false);
  };

  // Funciones para manejar cambios en los inputs
  const handleDeliveryDateChange = (e) => {
    setDeliveryDate(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className={styles.status}>
      <div className={styles.statusHeader}>
        <p>Encargo en proceso</p>
        <span className={styles.statusDot}></span>
      </div>

      <div className={styles.userInfo}>
        <div className={styles.avatar}></div>
        <div>
          <p><strong>Danier Rey</strong></p>
          <p>Fecha Inicio</p>
          <p><strong>17 Nov | 1:00 pm</strong></p>
        </div>
      </div>

      <div className={styles.deliveryInfo}>
        <sp>Plazo de entrega:</sp>
        <sp><strong>{deliveryDate}</strong></sp>
      </div>

      <div className={styles.addressInfo}>
        <sp>Dirección:</sp>
        <sp><strong>{address}</strong></sp>
      </div>

      <div className={styles.priceInfo}>
        <sp>Valor:</sp>
        <sp><strong>${price}</strong></sp>
      </div>

      <button className={styles.detailsButton} onClick={handleEditClick}>
        Ver detalles
      </button>

      {/* Modal para edición */}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Editar Encargo</h2>

            <div className={styles.addressInfo}>
              <p>Dirección:</p>
              <input
                type="text"
                value={address}
                onChange={handleAddressChange}
              />
            </div>
            <div className={styles.deliveryInfo}>
              <p>Plazo de entrega:</p>
              <input
                type="datetime-local"
                value={deliveryDate}
                onChange={handleDeliveryDateChange}
              />
            </div>

            <div className={styles.priceInfo}>
              <p>Valor</p>
              <input
                type="number"
                value={price}
                onChange={handlePriceChange}
              />
            </div>

            <div className={styles.modalButtons}>
              <button onClick={handleCloseModal}>Cancelar</button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  handleCloseModal();
                }}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Status;
