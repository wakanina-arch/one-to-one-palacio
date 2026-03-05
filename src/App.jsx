import React, { useState } from 'react';
import WelcomeInicio from './WelcomeInicio';
import CategoriaScreen2 from './components/CategoriaScreen2';

function App() {
  const [pantalla, setPantalla] = useState('welcome');
  const [categoriaActual, setCategoriaActual] = useState(null);

  const database = {
    primero: {
      titulo: 'COMPLEMENTOS',
      icono: '🍟',
      imagenes: ['/imagenes/complementos/foto1.png', '/imagenes/complementos/foto2.png'], // Ajusta nombres reales
      opciones: [{ nombre: 'Patatas Bravas', precio: 6.50 }, { nombre: 'Croquetas Caseras', precio: 8.00 }]
    },
    segundo: {
      titulo: 'ENSALADAS',
      icono: '🥗',
      imagenes: ['/imagenes/ensaladas/foto1.png', '/imagenes/ensaladas/foto2.png'],
      opciones: [{ nombre: 'Ensalada César', precio: 11.50 }, { nombre: 'Ensalada Caprese', precio: 9.90 }]
    },
    postres: {
      titulo: 'BEBIDAS',
      icono: '🥤',
      imagenes: ['/imagenes/bebidas/foto1.png', '/imagenes/bebidas/foto2.png'],
      opciones: [{ nombre: 'Cerveza Artesana', precio: 3.50 }, { nombre: 'Refresco', precio: 2.50 }]
    },
    otras: {
      titulo: 'PIZZAS',
      icono: '🍕',
      imagenes: ['/imagenes/pizzas/foto1.png', '/imagenes/pizzas/foto2.png'],
      opciones: [{ nombre: 'Pizza Margarita', precio: 12.00 }, { nombre: 'Pizza Carbonara', precio: 14.50 }]
    }
  };

  const handleSelectCategory = (categoria) => {
    setCategoriaActual(categoria);
    setPantalla('categoria');
  };

  return (
    <div>
      {pantalla === 'welcome' ? (
        <WelcomeInicio onSelectCategory={handleSelectCategory} />
      ) : (
        <CategoriaScreen2
          titulo={database[categoriaActual]?.titulo || 'CATEGORÍA'}
          icono={database[categoriaActual]?.icono || '🔥'}
          imagenes={database[categoriaActual]?.imagenes || []}
          opciones={database[categoriaActual]?.opciones || []}
        />
      )}
    </div>
  );
}

export default App;
