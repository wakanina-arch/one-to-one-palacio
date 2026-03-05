import React from 'react';
import Carrusel from './Carrusel';

export default function CategoriaScreen2({ categoria, onBack }) {
  if (!categoria) return null;

  // Mapeo real de imágenes según la carpeta que definimos en App.jsx
  // Esto busca archivos ensalada1.jpg, ensalada2.jpg... en sus carpetas
  const rutasImagenes = [
    `/imagenes/${categoria.folder}/ensalada1.jpg`,
    `/imagenes/${categoria.folder}/ensalada2.jpg`,
    `/imagenes/${categoria.folder}/ensalada3.jpg`
  ];

  return (
    <div style={{ 
      background: '#0a0a0a', 
      minHeight: '100dvh', 
      color: 'white', 
      display: 'flex', 
      flexDirection: 'column',
      width: '100vw'
    }}>
      {/* Header Fijo */}
      <header style={{ 
        padding: '20px', 
        textAlign: 'center', 
        background: 'linear-gradient(to bottom, #8B0000, #0a0a0a)',
        borderBottom: '1px solid #FFD700'
      }}>
        <h1 style={{ fontSize: '1.8rem', margin: 0, letterSpacing: '1px', textTransform: 'uppercase' }}>
          {categoria.icono} {categoria.titulo}
        </h1>
      </header>

      {/* Contenedor del Carrusel (Ajustado para que no se corte) */}
      <div style={{ width: '100%', height: '280px', flexShrink: 0 }}>
        <Carrusel imagenes={rutasImagenes} autoPlay={true} intervalo={3500} />
      </div>

      {/* Lista de Platos Dinámica */}
      <div style={{ 
        flex: 1, 
        padding: '20px', 
        overflowY: 'auto', 
        paddingBottom: '100px',
        background: 'rgba(255,255,255,0.02)' 
      }}>
        {categoria.platos?.map((plato, i) => (
          <div key={i} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '15px 0', 
            borderBottom: '1px solid #333',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{plato.nombre}</span>
            <span style={{ 
              color: '#FFD700', 
              fontWeight: 'bold', 
              fontSize: '1rem',
              padding: '5px 12px',
              border: '1px solid #FFD70066',
              borderRadius: '20px'
            }}>
              ${plato.precio.toFixed(2)}
            </span>
          </div>
        )) || <p style={{textAlign: 'center', opacity: 0.5}}>Cargando menú...</p>}
      </div>

      {/* Botón Volver con Feedback Visual */}
      <button 
        onClick={onBack} 
        style={{ 
          position: 'fixed', 
          bottom: 0, 
          width: '100%', 
          padding: '20px', 
          background: '#8B0000', 
          color: 'white', 
          border: 'none', 
          fontWeight: 'bold', 
          fontSize: '1.2rem',
          zIndex: 100,
          boxShadow: '0 -5px 20px rgba(0,0,0,0.8)',
          cursor: 'pointer'
        }}
      >
        VOLVER AL INICIO
      </button>
    </div>
  );
}
