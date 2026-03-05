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

  if (!imagenes || imagenes.length === 0) return <div style={{height: '100%', color: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>No hay fotos</div>;

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: '#000' }}>
      <img 
        src={imagenes[indice]} 
        alt="Plato" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        onError={(e) => {
          console.error("Error en:", imagenes[indice]);
          e.target.style.display = 'none';
        }}
      />
    </div>
  );
}
