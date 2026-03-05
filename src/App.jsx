import React, { useState } from 'react';
import WelcomeInicio from './WelcomeInicio';
import CategoriaScreen2 from './components/CategoriaScreen2';

function App() {
  const [pantalla, setPantalla] = useState('welcome');
  const [categoriaActual, setCategoriaActual] = useState(null);

  const database = {
    primero: { titulo: 'PRIMEROS', opciones: [{ nombre: 'Alitas BBQ', precio: 12.50 }] },
    segundo: { titulo: 'ENSALADAS', opciones: [{ nombre: 'Ensalada César', precio: 11.50 }] },
    postres: { titulo: 'POSTRES', opciones: [{ nombre: 'Tarta de Queso', precio: 5.90 }] },
    otras: { titulo: 'OTRAS', opciones: [{ nombre: 'Combo', precio: 24.90 }] }
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
          opciones={database[categoriaActual]?.opciones || []}
        />
      )}
    </div>
  );
}
export default App;
