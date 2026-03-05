import React, { useState, useEffect } from 'react';

const Carrusel = ({ imagenes, autoPlay = true, intervalo = 3000 }) => {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    if (!autoPlay || !imagenes || imagenes.length <= 1) return;
    const tick = setInterval(() => {
      setIndice(actual => (actual + 1) % imagenes.length);
    }, intervalo);
    return () => clearInterval(tick);
  }, [autoPlay, intervalo, imagenes]);

  if (!imagenes || imagenes.length === 0) return null;

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: '#000', overflow: 'hidden' }}>
      <img 
        src={imagenes[indice]} 
        alt="Plato" 
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
        onError={(e) => e.target.src = 'https://via.placeholder.com...'}
      />
    </div>
  );
};

export default Carrusel;
