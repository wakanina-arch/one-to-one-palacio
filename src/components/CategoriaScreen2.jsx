import React from 'react';
import Carrusel from './Carrusel';

function CategoriaScreen2({ titulo, icono, imagenes, opciones }) {
  return (
    <div style={{ background: '#1a1a1a', minHeight: '100vh', color: 'white', fontFamily: 'serif' }}>
      <header style={{ padding: '20px', textAlign: 'center', background: 'linear-gradient(to bottom, #B22222, #1a1a1a)' }}>
        <h1 style={{ fontSize: '2rem', margin: 0 }}>{icono} {titulo}</h1>
      </header>

      {/* Aquí insertamos tu nuevo Carrusel */}
      <div style={{ width: '100%', height: '250px', borderBottom: '2px solid #FFD700' }}>
        <Carrusel imagenes={imagenes} autoPlay={true} intervalo={3000} />
      </div>

      <div style={{ padding: '20px', paddingBottom: '100px' }}>
        {opciones.map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #333' }}>
            <span style={{ fontWeight: 'bold' }}>{item.nombre}</span>
            <span style={{ color: '#FFD700' }}>${item.precio.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <button 
        onClick={() => window.location.reload()} 
        style={{ position: 'fixed', bottom: 0, width: '100%', padding: '20px', background: '#B22222', color: 'white', border: 'none', fontWeight: 'bold', fontSize: '1.2rem', zIndex: 100 }}
      >
        VOLVER AL MENÚ
      </button>
    </div>
  );
}
export default CategoriaScreen2;
