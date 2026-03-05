import React, { useState, useEffect } from 'react';
import RegisterModal from './components/RegisterModal';

export default function WelcomeInicio({ onSelectCategory }) {
  const [showEdicto, setShowEdicto] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('oneToOneUser');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <div style={{ height: "100vh", background: "linear-gradient(135deg, #8B4513, #CD5C5C)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
      <style>{`
        @keyframes girar { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
        .moneda { width: 80px; height: 80px; cursor: pointer; perspective: 1000px; margin: 0 auto 20px; animation: girar 5s linear infinite; transform-style: preserve-3d; }
        .cara { position: absolute; width: 100%; height: 100%; border-radius: 50%; display: flex; align-items: center; justify-content: center; backface-visibility: hidden; border: 3px solid gold; color: white; font-size: 2rem; }
        .trasera { transform: rotateY(180deg); background: #8B4513; }
        .frontal { background: #CD5C5C; }
      `}</style>

      <div style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", padding: "2rem", borderRadius: "30px", textAlign: "center", width: "320px" }}>
        <div className="moneda" onClick={() => setShowEdicto(true)}>
          <div className="cara frontal">🔱</div>
          <div className="cara trasera">{user ? user.nombre.charAt(0).toUpperCase() : '👤'}</div>
        </div>
        <h1 style={{ color: "white", fontFamily: "serif" }}>ONE TO ONE</h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "20px" }}>
          {['primero', 'segundo', 'postres', 'otras'].map(id => (
            <button key={id} onClick={() => onSelectCategory(id)} style={{ padding: "15px", background: "rgba(0,0,0,0.3)", color: "white", border: "1px solid white", borderRadius: "20px", fontSize: "0.7rem", fontWeight: "bold" }}>{id.toUpperCase()}</button>
          ))}
        </div>
      </div>

      {showEdicto && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '30px', maxWidth: '320px', textAlign: 'center' }}>
            <h2 style={{ color: '#8B4513' }}>EL EDICTO</h2>
            <p style={{ margin: '15px 0', fontSize: '0.9rem' }}>El registro es un privilegio opcional para la nobleza de ONE TO ONE.</p>
            <button onClick={() => { setShowEdicto(false); setShowRegister(true); }} style={{ width: '100%', padding: '12px', background: '#8B4513', color: 'white', border: 'none', borderRadius: '15px', fontWeight: 'bold' }}>REGISTRARSE</button>
            <button onClick={() => setShowEdicto(false)} style={{ marginTop: '10px', background: 'none', border: 'none', color: '#666' }}>Cerrar</button>
          </div>
        </div>
      )}

      <RegisterModal open={showRegister} onClose={() => setShowRegister(false)} onRegister={(u) => { localStorage.setItem('oneToOneUser', JSON.stringify(u)); setUser(u); setShowRegister(false); }} />
    </div>
  );
}
