import React from 'react';

export default function WelcomeInicioCore({ 
onSelectCategory }) {
  return (
    <div style={{
      height: "100vh",
      background: "#8B4513",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem"
    }}>
      <div style={{
        background: "white",
        padding: "2rem",
        borderRadius: "30px",
        maxWidth: "350px",
        width: "100%",
        textAlign: "center"
      }}>
        <h1 style={{ color: "#8B4513", fontSize: 
"2rem", marginBottom: "2rem" }}>
          ONE TO ONE
        </h1>
        
        <div style={{ display: "grid", 
gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
          {[
            { id: 'primero', label: 'PRIMEROS' },
            { id: 'segundo', label: 'SEGUNDOS' },
            { id: 'postres', label: 'POSTRES' },
            { id: 'otras', label: 'OTRAS' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              style={{
                padding: "1rem",
                background: "#CD5C5C",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => 
e.target.style.background = "#8B4513"}
              onMouseLeave={(e) => 
e.target.style.background = "#CD5C5C"}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
