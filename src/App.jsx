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
      folder: 'complementos',
      platos: [
        { nombre: 'Patatas Bravas', precio: 6.50 },
        { nombre: 'Croquetas Caseras', precio: 8.50 },
        { nombre: 'Alitas de Pollo', precio: 9.00 }
      ]
    },
    segundo: { 
      titulo: 'ENSALADAS', 
      icono: '🥗', 
      folder: 'ensaladas',
      platos: [
        { nombre: 'Ensalada César', precio: 11.50 },
        { nombre: 'Ensalada Caprese', precio: 10.90 },
        { nombre: 'Ensalada Mixta', precio: 9.50 }
      ]
    },
    postres: { 
      titulo: 'BEBIDAS', 
      icono: '🥤', 
      folder: 'bebidas',
      platos: [
        { nombre: 'Cerveza Nacional', precio: 3.50 },
        { nombre: 'Copa de Vino', precio: 4.00 },
        { nombre: 'Refrescos', precio: 2.50 }
      ]
    },
    otras: { 
      titulo: 'PIZZAS', 
      icono: '🍕', 
      folder: 'pizzas',
      platos: [
        { nombre: 'Margarita', precio: 12.00 },
        { nombre: 'Carbonara', precio: 14.50 },
        { nombre: 'Cuatro Quesos', precio: 13.90 }
      ]
    }
  };

  const handleSelectCategory = (id) => {
    setCategoriaActual(id);
    setPantalla('categoria');
  };

  return (
    <div className="App">
      {pantalla === 'welcome' ? (
        <WelcomeInicio onSelectCategory={handleSelectCategory} />
      ) : (
        <CategoriaScreen2 
          categoria={database[categoriaActual]} 
          onBack={() => setPantalla('welcome')} 
        />
      )}
    </div>
  );
}

export default App;
