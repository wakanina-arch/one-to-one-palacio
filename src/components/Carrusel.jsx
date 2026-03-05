import React, { useState, useEffect } from 'react';

export default function Carrusel({ imagenes, autoPlay = true, intervalo = 3000 }) {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    if (!autoPlay || !imagenes || imagenes.length <= 1) return;
    const tick = setInterval(() => {
      setIndice(actual => (actual + 1) % imagenes.length);
    }, intervalo);
    return () => clearInterval(tick);
  }, [autoPlay, intervalo, imagenes]);

  if (!imagenes || imagenes.length === 0) return <div style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999'}}>No hay imágenes</div>;

  const siguiente = () => setIndice(actual => (actual + 1) % imagenes.length);
  const anterior = () => setIndice(actual => (actual - 1 + imagenes.length) % imagenes.length);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: '#000', overflow: 'hidden' }}>
      <img src={imagenes[indice]} alt="slide" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
           onError={(e) => { e.target.src = 'https://via.placeholder.com'; }} />
      {imagenes.length > 1 && (
        <>
          <button onClick={anterior} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', zIndex: 10 }}>‹</button>
          <button onClick={siguiente} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', zIndex: 10 }}>›</button>
        </>
      )}
    </div>
  );
}
