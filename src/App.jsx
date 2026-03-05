import React, { useState } from 'react';
import WelcomeInicio from './WelcomeInicio';
import CategoriaScreen2 from './components/CategoriaScreen2';

function App() {
  const [pantalla, setPantalla] = useState('welcome');
  const [categoriaActual, setCategoriaActual] = useState(null);

  const database = {
    primero: { titulo: 'COMPLEMENTOS', icono: '🍟', folder: 'primero', platos: [{ id: 1, nombre: 'Patatas Bravas', precio: 6.50, kcal: 450 }] },
    segundo: { titulo: 'ENSALADAS', icono: '🥗', folder: 'segundo', platos: [{ id: 3, nombre: 'Ensalada César', precio: 11.50, kcal: 580 }] },
    postres: { titulo: 'BEBIDAS', icono: '🥤', folder: 'postres', platos: [{ id: 6, nombre: 'Refrescos', precio: 2.50, kcal: 140 }] },
    otras: { titulo: 'PIZZAS', icono: '🍕', folder: 'otras', platos: [{ id: 8, nombre: 'Margarita', precio: 12.00, kcal: 850 }] }
  };

  const handleSelectCategory = (id) => {
    setCategoriaActual(id);
    setPantalla('categoria');
  };

  return (
    <div className="App" style={{ width: '100vw', margin: 0, padding: 0 }}>
      {pantalla === 'welcome' ? (
        <WelcomeInicio onSelectCategory={handleSelectCategory} />
      ) : (
        <CategoriaScreen2 categoria={database[categoriaActual]} onBack={() => setPantalla('welcome')} />
      )}
    </div>
  );
}

export default App;
