import React from 'react';

export default function MenuDesplegable({ abierto, onClose, onSelectCategoria }) {
  if (!abierto) return null;
  const categorias = [
    { id: 'primero', label: 'PRIMEROS', icono: '🍖' },
    { id: 'segundo', label: 'SEGUNDOS', icono: '🥘' },
    { id: 'postres', label: 'POSTRES', icono: '🍯' },
    { id: 'otras', label: 'OTRAS', icono: '🔥' }
  ];
  return (
    <div style={{ position: "fixed", top: "60px", left: 0, width: "250px", background: "rgba(30,30,30,0.95)", backdropFilter: "blur(10px)", borderRadius: "0 20px 20px 0", padding: "1rem", borderRight: "3px solid #FFD700", borderBottom: "3px solid #FFD700", zIndex: 99 }}>
      <h3 style={{ color: "#FFD700", marginBottom: "1rem", borderBottom: "1px solid #FFD700" }}>MENÚ</h3>
      {categorias.map(cat => (
        <button key={cat.id} onClick={() => { onSelectCategoria(cat.id); onClose(); }} style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", padding: "0.8rem", background: "transparent", border: "none", color: "white", cursor: "pointer" }}>
          <span>{cat.icono}</span><span>{cat.label}</span>
        </button>
      ))}
    </div>
  );
}
