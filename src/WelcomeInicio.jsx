import React from 'react';

export default function WelcomeInicio({ onSelectCategory }) {
  const categorias = [
    { id: 'primero', label: 'PRIMEROS', icono: '🍖' },
    { id: 'segundo', label: 'SEGUNDOS', icono: '🥗' },
    { id: 'postres', label: 'POSTRES', icono: '🍯' },
    { id: 'otras', label: 'OTROS', icono: '🔥' }
  ];

  return (
    <div style={{ height: '100vh', background: 'radial-gradient(circle, #B22222, #000)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
      <div className="moneda" style={{ fontSize: '4rem', animation: 'girar 4s infinite linear' }}>🔱</div>
      <h1 style={{ fontFamily: 'serif', margin: '20px 0' }}>ONE TO ONE</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {categorias.map(cat => (
          <button key={cat.id} onClick={() => onSelectCategory(cat.id)} style={{ padding: '15px', background: '#FF4500', border: '1px solid gold', color: 'white', borderRadius: '10px', fontWeight: 'bold' }}>
            {cat.icono} {cat.label}
          </button>
        ))}
      </div>
      <style>{` @keyframes girar { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } } `}</style>
    </div>
  );
}
