import React from 'react';

export default function PerfilDesplegable({ abierto, onClose, usuario, onLogout }) {
  if (!abierto) return null;
  return (
    <div style={{ position: "fixed", top: "60px", right: "10px", width: "250px", background: "rgba(30,30,30,0.95)", backdropFilter: "blur(10px)", borderRadius: "20px", padding: "1rem", border: "3px solid #FFD700", zIndex: 99 }}>
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "#FF4500", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", color: "#FFD700" }}>{usuario?.nombre?.charAt(0) || '👤'}</div>
        <h4 style={{ color: "#FFD700", margin: "0.5rem 0" }}>{usuario?.nombre || 'Invitado'}</h4>
      </div>
      <button onClick={onLogout} style={{ width: "100%", padding: "0.8rem", background: "transparent", border: "1px solid #FFD700", color: "white", borderRadius: "10px", cursor: "pointer" }}>🚪 Cerrar sesión</button>
    </div>
  );
}
