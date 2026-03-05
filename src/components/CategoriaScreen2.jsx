import React, { useState, useEffect } from 'react';
import Carrusel from './Carrusel';
import BarraSuperior from './layouts/BarraSuperior';
import MenuDesplegable from './layouts/MenuDesplegable';
import PerfilDesplegable from './layouts/PerfilDesplegable';

export default function CategoriaScreen2({ categoria, onBack, onSelectCategoria }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [perfilAbierto, setPerfilAbierto] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [imagenesAuto, setImagenesAuto] = useState([]);
  const [seleccionados, setSeleccionados] = useState({});

  useEffect(() => {
    // 1. Cargar Usuario
    const savedUser = localStorage.getItem('oneToOneUser');
    if (savedUser) setUsuario(JSON.parse(savedUser));

    // 2. Escaneo de Imágenes
    const modulos = import.meta.glob('/public/imagenes/**/*.{jpg,jpeg,png,JPG,PNG,webp}', { eager: true });
    const rutas = Object.keys(modulos)
      .filter(path => path.toLowerCase().includes(`/${categoria.folder}/`))
      .map(path => path.replace('/public', ''));
    setImagenesAuto(rutas);
  }, [categoria]);

  const togglePlato = (id) => {
    setSeleccionados(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalItems = Object.values(seleccionados).filter(Boolean).length;
  const platosSeleccionados = categoria.platos?.filter(p => seleccionados[p.id]) || [];
  const totalPrecio = platosSeleccionados.reduce((sum, p) => sum + p.precio, 0);

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100dvh', color: 'white', width: '100vw', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. BARRA SUPERIOR (Encima de todo) */}
      <BarraSuperior 
        usuario={usuario}
        onMenuClick={() => setMenuAbierto(!menuAbierto)}
        onPerfilClick={() => setPerfilAbierto(!perfilAbierto)}
        onCarritoClick={() => alert('🛒 Pedido: ' + platosSeleccionados.map(p => p.nombre).join(', '))}
        carritoCount={totalItems}
      />

      {/* 2. DESPLEGABLES */}
      <MenuDesplegable 
        abierto={menuAbierto} 
        onClose={() => setMenuAbierto(false)} 
        onSelectCategoria={onSelectCategoria} 
      />
      <PerfilDesplegable 
        abierto={perfilAbierto} 
        usuario={usuario} 
        onLogout={() => { localStorage.removeItem('oneToOneUser'); setUsuario(null); setPerfilAbierto(false); }}
      />

      {/* 3. CARRUSEL */}
      <div style={{ width: '100%', height: '220px', flexShrink: 0 }}>
        <Carrusel imagenes={imagenesAuto} autoPlay={true} />
      </div>

      {/* 4. LISTADO CON CHECKBOXES */}
      <div style={{ flex: 1, padding: '15px', overflowY: 'auto', paddingBottom: '100px' }}>
        {categoria.platos?.map((plato) => (
          <div key={plato.id} onClick={() => togglePlato(plato.id)} style={{ 
            display: 'flex', alignItems: 'center', padding: '15px', marginBottom: '12px',
            background: seleccionados[plato.id] ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255,255,255,0.05)', 
            borderRadius: '15px', border: seleccionados[plato.id] ? '1px solid #FFD700' : '1px solid #333'
          }}>
            <input type="checkbox" checked={!!seleccionados[plato.id]} readOnly style={{ width: '22px', height: '22px', accentColor: '#FFD700' }} />
            <div style={{ flex: 1, marginLeft: '15px' }}>
              <div style={{ fontWeight: 'bold' }}>{plato.nombre}</div>
              <div style={{ fontSize: '0.8rem', color: '#FF4500' }}>🔥 {plato.kcal} kcal</div>
            </div>
            <div style={{ fontWeight: 'bold', color: '#FFD700' }}>{plato.precio.toFixed(2)}€</div>
          </div>
        ))}
      </div>

      {/* 5. BOTÓN VOLVER */}
      <button onClick={onBack} style={{ position: 'fixed', bottom: 0, width: '100%', padding: '20px', background: '#8B0000', color: 'white', border: 'none', fontWeight: 'bold', zIndex: 100 }}>
        VOLVER AL INICIO
      </button>
    </div>
  );
}
