import React, { useState, useEffect } from 'react';
import Carrusel from './Carrusel';

export default function CategoriaScreen2({ categoria, onBack }) {
  const [imagenesAuto, setImagenesAuto] = useState([]);
  const [seleccionados, setSeleccionados] = useState({});

  useEffect(() => {
    // Vite escanea la carpeta pública y filtra por la categoría seleccionada
    const cargarImagenes = async () => {
      // Importamos todas las imágenes de la carpeta public/imagenes
      const modulos = import.meta.glob('/public/imagenes/**/*.{jpg,jpeg,png,svg,webp}');
      const rutas = Object.keys(modulos)
        .filter(ruta => ruta.includes(`/${categoria.folder}/`))
        .map(ruta => ruta.replace('/public', '')); // Limpiamos la ruta para el navegador
      
      setImagenesAuto(rutas);
    };

    if (categoria) cargarImagenes();
  }, [categoria]);

  if (!categoria) return null;

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100dvh', color: 'white', width: '100vw', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '15px', textAlign: 'center', background: 'linear-gradient(to bottom, #8B0000, #0a0a0a)', borderBottom: '1px solid #FFD700' }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>{categoria.icono} {categoria.titulo}</h1>
      </header>

      <div style={{ width: '100%', height: '250px', flexShrink: 0 }}>
        {/* Usamos las imágenes que el detective encontró */}
        <Carrusel imagenes={imagenesAuto} autoPlay={true} />
      </div>

      <div style={{ flex: 1, padding: '15px', overflowY: 'auto', paddingBottom: '100px' }}>
        {categoria.platos?.map((plato) => (
          <div key={plato.id} style={{ display: 'flex', alignItems: 'center', padding: '15px', marginBottom: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>
            <input type="checkbox" checked={!!seleccionados[plato.id]} onChange={() => setSeleccionados({...seleccionados, [plato.id]: !seleccionados[plato.id]})} style={{width:'20px', height:'20px'}} />
            <div style={{ flex: 1, marginLeft: '15px' }}>
              <div style={{ fontWeight: 'bold' }}>{plato.nombre}</div>
              <div style={{ fontSize: '0.8rem', color: '#FF4500' }}>🔥 {plato.kcal} kcal</div>
            </div>
            <div style={{ color: '#FFD700', fontWeight: 'bold' }}>{plato.precio.toFixed(2)}€</div>
          </div>
        ))}
      </div>
      <button onClick={onBack} style={{ position: 'fixed', bottom: 0, width: '100%', padding: '20px', background: '#8B0000', color: 'white', border: 'none', fontWeight: 'bold' }}>VOLVER</button>
    </div>
  );
}
