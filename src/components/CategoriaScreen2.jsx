import React from 'react';

function CategoriaScreen2({ titulo, icono, imagenes, opciones }) {
  return (
    <div style={{ background: '#1a1a1a', minHeight: '100vh', color: 'white', fontFamily: 'serif' }}>
      <header style={{ padding: '20px', textAlign: 'center', background: 'linear-gradient(to bottom, #B22222, #1a1a1a)' }}>
        <h1 style={{ fontSize: '2.5rem' }}>{icono} {titulo}</h1>
      </header>

      {/* Carrusel Visual */}
      <div style={{ display: 'flex', overflowX: 'auto', gap: '15px', padding: '20px', scrollSnapType: 'x mandatory' }}>
        {imagenes.map((img, index) => (
          <img key={index} src={img} alt="plato" style={{ width: '280px', height: '200px', borderRadius: '15px', objectFit: 'cover', scrollSnapAlign: 'start', border: '2px solid #FFD700' }} />
        ))}
      </div>

      {/* Lista de Platos */}
      <div style={{ padding: '20px' }}>
        {opciones.map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #333' }}>
            <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{item.nombre}</span>
            <span style={{ color: '#FFD700' }}>${item.precio.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <button onClick={() => window.location.reload()} style={{ width: '100%', padding: '15px', background: '#B22222', color: 'white', border: 'none', fontWeight: 'bold' }}>
        VOLVER AL MENÚ
      </button>
    </div>
  );
}
export default CategoriaScreen2;
