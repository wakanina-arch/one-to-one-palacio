import React, { useState } from 'react';
import WelcomeInicio from './WelcomeInicio';
import CategoriaScreen2 from './components/CategoriaScreen2';

function App() {
  const [pantalla, setPantalla] = useState('welcome');
  const [categoriaActual, setCategoriaActual] = useState(null);

  const database = {
    primero: { titulo: 'COMPLEMENTOS', icono: '🍟', folder: 'complementos' },
    segundo: { titulo: 'ENSALADAS', icono: '🥗', folder: 'ensaladas' },
    postres: { titulo: 'BEBIDAS', icono: '🥤', folder: 'bebidas' },
    otras: { titulo: 'PIZZAS', icono: '🍕', folder: 'pizzas' }
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
