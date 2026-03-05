import React from 'react';

export default function BarraSuperior({ usuario, onMenuClick, onCarritoClick, onPerfilClick, carritoCount = 0 }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.8rem 1rem", background: "rgba(0,0,0,0.3)", backdropFilter: "blur(10px)", borderBottom: "2px solid #FFD700", position: "sticky", top: 0, zIndex: 100 }}>
      <button onClick={onMenuClick} style={botonIconoStyle}>☰</button>
      <h2 style={{ color: "#FFD700", margin: 0, fontFamily: "serif", fontSize: "1.2rem" }}>ONE TO ONE</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={onCarritoClick} style={botonIconoStyle}>
          🛒{carritoCount > 0 && <span style={contadorStyle}>{carritoCount}</span>}
        </button>
        <button onClick={onPerfilClick} style={botonIconoStyle}>{usuario ? '👤' : '⚜️'}</button>
      </div>
    </div>
  );
}
const botonIconoStyle = { background: "transparent", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "#FFD700", position: "relative" };
const contadorStyle = { position: "absolute", top: "-5px", right: "-5px", background: "#FF4500", color: "white", fontSize: "0.7rem", width: "18px", height: "18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" };
