import React, { useState } from "react";
import styles from "./ClientManagement.module.css";
import { FaPen } from "react-icons/fa";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const ClientManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [clients, setClients] = useState([
    { name: "Juan Perez", email: "juan@email.com" },
    { name: "Maria Lopez", email: "maria@email.com" }
  ]);
  const [filteredClients, setFilteredClients] = useState(clients);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newClient, setNewClient] = useState({ name: "", email: "" });
  const [clientToEdit, setClientToEdit] = useState({ index: null, name: "", email: "" });

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSearchClick = () => {
    const results = clients.filter(client =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredClients(results);
  };

  const handleViewAll = () => {
    setFilteredClients(clients);
    setSearchQuery("");
  };

  const handleAddClientClick = () => setShowAddModal(true);

  const handleSaveClient = () => {
    if (newClient.name && newClient.email) {
      const updatedClients = [...clients, newClient];
      setClients(updatedClients);
      setFilteredClients(updatedClients);
      setNewClient({ name: "", email: "" });
      setShowAddModal(false);
    } else {
      alert("Nombre y correo son obligatorios.");
    }
  };

  const handleEditClient = (index) => {
    const client = filteredClients[index];
    setClientToEdit({ index, name: client.name, email: client.email });
    setShowEditModal(true);
  };

  const handleSaveEditedClient = () => {
    const { index, name, email } = clientToEdit;
    if (name && email) {
      const updatedClients = [...clients];
      const original = filteredClients[index];
      const originalIndex = clients.findIndex(
        c => c.name === original.name && c.email === original.email
      );
      updatedClients[originalIndex] = { name, email };
      setClients(updatedClients);
      setFilteredClients(updatedClients);
      setShowEditModal(false);
    } else {
      alert("Nombre y correo no pueden estar vacíos.");
    }
  };

  return (
    <div className={styles.ClientManagement}>
      {/* Header con botones */}
      <header className={styles.header}>
        <button className={styles.addButton} onClick={handleAddClientClick}>
          Agregar nuevo +
        </button>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={searchQuery}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
          <button
            className={styles.HiMiniMagnifyingGlass}
            onClick={handleSearchClick}
          >
            <HiMiniMagnifyingGlass />
          </button>
        </div>
      </header>

      {/* Status management */}
      <div className={styles.statusManagement}>
        <div className={styles.clientSummary}>
          <p><strong>Clientes {filteredClients.length}</strong></p>
          <button className={styles.viewAllButton} onClick={handleViewAll}>
            Ver todos
          </button>
        </div>

        <div className={styles.clientList}>
          {filteredClients.map((client, index) => (
            <div key={index} className={styles.clientItem}>
              <div className={styles.clientInfo}>
                <p><strong>{client.name}</strong></p>
                <p>{client.email}</p>
              </div>
              <button
                onClick={() => handleEditClient(index)}
                className={styles.editButton}
              >
                <FaPen />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de agregar cliente */}
      {showAddModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Agregar nuevo cliente</h2>
            <div className={styles.modalField}>
              <p>Nombre:</p>
              <input
                type="text"
                value={newClient.name}
                onChange={(e) =>
                  setNewClient({ ...newClient, name: e.target.value })
                }
              />
            </div>
            <div className={styles.modalField}>
              <p>Correo:</p>
              <input
                type="email"
                value={newClient.email}
                onChange={(e) =>
                  setNewClient({ ...newClient, email: e.target.value })
                }
              />
            </div>
            <div className={styles.modalButtons}>
              <button onClick={() => setShowAddModal(false)}>Cancelar</button>
              <button onClick={handleSaveClient}>Guardar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de editar cliente */}
      {showEditModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Editar cliente</h2>
            <div className={styles.modalField}>
              <p>Nombre:</p>
              <input
                type="text"
                value={clientToEdit.name}
                onChange={(e) =>
                  setClientToEdit({ ...clientToEdit, name: e.target.value })
                }
              />
            </div>
            <div className={styles.modalField}>
              <p>Correo:</p>
              <input
                type="email"
                value={clientToEdit.email}
                onChange={(e) =>
                  setClientToEdit({ ...clientToEdit, email: e.target.value })
                }
              />
            </div>
            <div className={styles.modalButtons}>
              <button onClick={() => setShowEditModal(false)}>Cancelar</button>
              <button
                className={styles.deleteButton}
                onClick={() => {
                  const toDelete = filteredClients[clientToEdit.index];
                  const updatedClients = clients.filter(
                    c => !(c.name === toDelete.name && c.email === toDelete.email)
                  );
                  setClients(updatedClients);
                  setFilteredClients(updatedClients);
                  setShowEditModal(false);
                }}
              >
                Borrar
              </button>
              <button onClick={handleSaveEditedClient}>Guardar</button>
            </div>
          </div>
        </div>
      )}


      {/* Inventario */}
      <div className={styles.inventorySection}>
        <p>Inventario (aún no implementado)</p>
      </div>
    </div>
  );
};

export default ClientManagement;
