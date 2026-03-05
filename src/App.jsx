import React, { useState } from 'react';
import WelcomeInicio from './WelcomeInicio';
import CategoriaScreen2 from './components/CategoriaScreen2';

function App() {
  const [pantalla, setPantalla] = useState('welcome');
  const [categoriaActual, setCategoriaActual] = useState(null);

  const database = {
    primero: { 
      titulo: 'COMPLEMENTOS', icono: '🍟', folder: 'complementos',
      platos: [
        { id: 1, nombre: 'Patatas Bravas', precio: 6.50, kcal: 450 },
        { id: 2, nombre: 'Croquetas Caseras', precio: 8.50, kcal: 320 }
      ]
    },
    segundo: { 
      titulo: 'ENSALADAS', icono: '🥗', folder: 'ensaladas',
      platos: [
        { id: 3, nombre: 'Ensalada César', precio: 11.50, kcal: 580 },
        { id: 4, nombre: 'Ensalada Caprese', precio: 10.90, kcal: 410 }
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
