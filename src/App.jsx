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
      imagenes: ['/imagenes/complementos/foto1.jpg', '/imagenes/complementos/foto2.jpg'],
      opciones: [{ nombre: 'Patatas Bravas', precio: 6.50 }, { nombre: 'Croquetas', precio: 8.00 }]
    },
    segundo: {
      titulo: 'ENSALADAS',
      icono: '🥗',
      imagenes: ['/imagenes/ensaladas/ensalada1.jpg', '/imagenes/ensaladas/ensalada2.jpg', '/imagenes/ensaladas/ensalada3.jpg'],
      opciones: [{ nombre: 'Ensalada César', precio: 11.50 }, { nombre: 'Mixta', precio: 9.00 }]
    },
    postres: {
      titulo: 'BEBIDAS',
      icono: '🥤',
      imagenes: ['/imagenes/bebidas/bebida1.jpg', '/imagenes/bebidas/bebida2.jpg'],
      opciones: [{ nombre: 'Cerveza', precio: 3.50 }, { nombre: 'Agua', precio: 2.00 }]
    },
    otras: {
      titulo: 'PIZZAS',
      icono: '🍕',
      imagenes: ['/imagenes/pizzas/pizza1.jpg', '/imagenes/pizzas/pizza2.jpg'],
      opciones: [{ nombre: 'Margarita', precio: 12.00 }, { nombre: 'Carbonara', precio: 14.50 }]
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
