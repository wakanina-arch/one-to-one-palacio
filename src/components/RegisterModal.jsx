import React from 'react';

export default function RegisterModal({ open, onClose, onRegister }) {
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
      <div style={{ background: '#2d0a0a', padding: '2rem', borderRadius: '20px', border: '2px solid #FFD700', textAlign: 'center', color: 'white', width: '80%' }}>
        <h2 style={{ fontFamily: 'serif' }}>RESERVA TU MESA</h2>
        <input id="nameInput" type="text" placeholder="Tu nombre" style={{ width: '100%', padding: '10px', marginBottom: '1rem', borderRadius: '10px', border: 'none' }} />
        <button onClick={() => onRegister({ nombre: document.getElementById('nameInput').value })} style={{ background: '#FF4500', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '15px', fontWeight: 'bold' }}>ENTRAR</button>
        <button onClick={onClose} style={{ display: 'block', margin: '10px auto', background: 'transparent', color: '#aaa', border: 'none' }}>Cerrar</button>
      </div>
    </div>
  );
}
