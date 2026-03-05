import React, { useState, useEffect } from 'react';
import RegisterModal from './components/RegisterModal';

export default function WelcomeInicio({ onSelectCategory }) {
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('oneToOneUser');
    if (savedUser) {
      try { setUser(JSON.parse(savedUser)); } catch (e) { console.log(e); }
    }
  }, []);

  const categorias = [
    { id: 'primero', label: 'PRIMEROS', icon: '🍖' },
    { id: 'segundo', label: 'SEGUNDOS', icon: '🥘' },
    { id: 'postres', label: 'POSTRES', icon: '🍯' },
    { id: 'otras', label: 'OTRAS', icon: '🔥' }
  ];

  return (
    <div style={{
      height: "100vh",
      background: "radial-gradient(circle, #8B4513, #000)",      
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "1rem", overflow: "hidden"
    }}>
      <style>{`
        @keyframes girar { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
        .moneda { width: 70px; height: 70px; cursor: pointer; perspective: 1000px; margin: 0 auto 15px; animation: girar 5s linear infinite; transform-style: preserve-3d; }
        .cara { position: absolute; width: 100%; height: 100%; border-radius: 50%; display: flex; align-items: center; justify-content: center; backface-visibility: hidden; border: 2px solid gold; color: white; font-size: 2rem; }
        .trasera { transform: rotateY(180deg); background: #8B4513; }
        .frontal { background: #CD5C5C; }
      `}</style>

      <div style={{
        background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(15px)",
        borderRadius: "40px",
        padding: "2rem 1.5rem",
        maxWidth: "350px",
        width: "100%",
        textAlign: "center",
        boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
        border: "1px solid rgba(255,255,255,0.2)"
      }}>
        
        {/* MONEDA: TRIDENTE */}
        <div className="moneda" onClick={() => setShowRegister(true)}>
          <div className="cara frontal">🔱</div>
          <div className="cara trasera">{user ? user.nombre?.charAt(0).toUpperCase() : '👤'}</div>
        </div>
        
        <h1 style={{ color: "white", fontSize: "2.2rem", margin: "0", fontFamily: "serif", letterSpacing: "2px" }}>
          ONE TO ONE
        </h1>
        
        <p style={{ color: "#FFD700", fontSize: "0.8rem", marginBottom: "1.2rem", fontStyle: "italic" }}>
          "El sabor de la brasa"
        </p>

        {/* BOTONES CATEGORÍAS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.7rem", marginBottom: "1.2rem" }}>
          {categorias.map(cat => (
            <button key={cat.id} onClick={() => onSelectCategory(cat.id)} style={{ padding: "0.8rem", background: "rgba(0,0,0,0.4)", color: "white", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "20px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontSize: "1.4rem" }}>{cat.icon}</span>
              <span style={{ fontSize: "0.7rem", fontWeight: "bold" }}>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* MENSAJE DE REGISTRO INTEGRADO */}
        <p onClick={() => setShowRegister(true)} style={{ color: "white", fontSize: "0.75rem", marginBottom: "1.5rem", cursor: "pointer", textDecoration: "underline" }}>
          Registrarse te acerca a descuentos y ofertas
        </p>

        <p style={{ fontSize: "0.7rem", color: "#FF4500", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
          🔥 EL SABOR DE LA TIERRA 🔥
        </p>
      </div>

      <RegisterModal 
        open={showRegister} 
        onClose={() => setShowRegister(false)} 
        onRegister={(u) => { 
          localStorage.setItem('oneToOneUser', JSON.stringify(u)); 
          setUser(u); 
          setShowRegister(false); 
        }} 
      />
    </div>
  );
}
