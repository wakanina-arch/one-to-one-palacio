import React from 'react';
import Carrusel from './Carrusel';

export default function CategoriaScreen2({ categoria, onBack }) {
  if (!categoria) return null;

  // Generamos las rutas de las imágenes basadas en la carpeta de la categoría
  // Ajustamos a .jpg que es lo que vimos en tu carpeta bebidas
  const imagenesSimuladas = [
    `/imagenes/${categoria.folder}/ensalada1.jpg`,
    `/imagenes/${categoria.folder}/ensalada2.jpg`,
    `/imagenes/${categoria.folder}/ensalada3.jpg`
  ];

  const opcionesDemo = [
    { nombre: 'Plato Especial 1', precio: 12.50 },
    { nombre: 'Plato Especial 2', precio: 15.90 },
    { nombre: 'Sugerencia del Chef', precio: 18.00 }
  ];

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', color: 'white', fontFamily: 'serif' }}>
      <header style={{ padding: '25px', textAlign: 'center', background: 'linear-gradient(to bottom, #8B0000, #0a0a0a)', borderBottom: '1px solid #FFD700' }}>
        <h1 style={{ fontSize: '2.2rem', margin: 0, letterSpacing: '2px' }}>{categoria.icono} {categoria.titulo}</h1>
      </header>

      <div style={{ width: '100%', height: '300px', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}>
        <Carrusel imagenes={imagenesSimuladas} autoPlay={true} intervalo={4000} />
      </div>

      <div style={{ padding: '30px', paddingBottom: '120px' }}>
        {opcionesDemo.map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '18px 0', borderBottom: '1px solid #333', alignItems: 'center' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.nombre}</span>
            <span style={{ color: '#FFD700', fontSize: '1.1rem', border: '1px solid #FFD700', padding: '4px 10px', borderRadius: '8px' }}>
              ${item.precio.toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <button 
        onClick={onBack} 
        style={{ position: 'fixed', bottom: 0, width: '100%', padding: '25px', background: 'linear-gradient(to right, #8B0000, #FF4500)', color: 'white', border: 'none', fontWeight: 'bold', fontSize: '1.3rem', zIndex: 100, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '2px' }}
      >
        ⬅ VOLVER AL MENÚ
      </button>
    </div>
  );
}
