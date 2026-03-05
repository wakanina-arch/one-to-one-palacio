import React, { useState } from 'react';
import Carrusel from './Carrusel';

export default function CategoriaScreen2({ categoria, onBack }) {
  const [seleccionados, setSeleccionados] = useState({});

  if (!categoria) return null;

  // Generar rutas dinámicas (intentamos cargar hasta 5 fotos por carpeta)
  const rutasImagenes = [1,2,3,4,5].map(n => `/imagenes/${categoria.folder}/ensalada${n}.jpg`);

  const togglePlato = (id) => {
    setSeleccionados(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100dvh', color: 'white', width: '100vw', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '15px', textAlign: 'center', background: 'linear-gradient(to bottom, #8B0000, #0a0a0a)', borderBottom: '1px solid #FFD700' }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>{categoria.icono} {categoria.titulo}</h1>
      </header>

      <div style={{ width: '100%', height: '220px', flexShrink: 0 }}>
        <Carrusel imagenes={rutasImagenes} autoPlay={true} />
      </div>

      <div style={{ flex: 1, padding: '15px', overflowY: 'auto', paddingBottom: '100px' }}>
        {categoria.platos?.map((plato) => (
          <div key={plato.id} style={{ 
            display: 'flex', alignItems: 'center', padding: '15px', marginBottom: '10px',
            background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: seleccionados[plato.id] ? '1px solid #FFD700' : '1px solid #333'
          }}>
            <input 
              type="checkbox" 
              checked={!!seleccionados[plato.id]} 
              onChange={() => togglePlato(plato.id)}
              style={{ width: '20px', height: '20px', marginRight: '15px', accentColor: '#FFD700' }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{plato.nombre}</div>
              <div style={{ fontSize: '0.8rem', color: '#aaa' }}>🔥 {plato.kcal} kcal</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#FFD700', fontWeight: 'bold' }}>${plato.precio.toFixed(2)}</div>
              <button 
                onClick={() => alert('Añadido: ' + plato.nombre)}
                style={{ background: '#FF4500', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', marginTop: '5px', fontSize: '0.7rem' }}
              >
                AÑADIR +
              </button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={onBack} style={{ position: 'fixed', bottom: 0, width: '100%', padding: '20px', background: '#8B0000', color: 'white', border: 'none', fontWeight: 'bold', fontSize: '1.2rem', zIndex: 100 }}>
        ⬅ VOLVER
      </button>
    </div>
  );
}
