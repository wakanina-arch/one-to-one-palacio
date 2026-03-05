import React, { useState } from 'react';
import WelcomeInicio from './WelcomeInicio';
import CategoriaScreen2 from './components/CategoriaScreen2';

function App() {
  const [pantalla, setPantalla] = useState('welcome');
  const [categoriaActual, setCategoriaActual] = useState(null);

  const database = {
    primero: { 
      titulo: 'COMPLEMENTOS', icono: '🍟', 
      imagenes: ['/imagenes/complementos/foto1.jpg'],
      platos: [{ id: 1, nombre: 'Patatas Bravas', precio: 6.50, kcal: 450 }]
    },
    segundo: { 
      titulo: 'ENSALADAS', icono: '🥗', 
      imagenes: ['/imagenes/ensaladas/ensalada1.jpg'],
      platos: [{ id: 3, nombre: 'Ensalada César', precio: 11.50, kcal: 580 }]
    },
    postres: { 
      titulo: 'POSTRES', icono: '🥤', 
      imagenes: [
        '/imagenes/postres/AguaMineral.jpg', '/imagenes/postres/CervezaClub.jpg', 
        '/imagenes/postres/CervezaGuinness.jpg', '/imagenes/postres/CervezaHeineken.jpg', 
        '/imagenes/postres/CocaCola.jpg', '/imagenes/postres/Fanta.jpg', 
        '/imagenes/postres/Guarana.jpg', '/imagenes/postres/Pepsi.jpg', 
        '/imagenes/postres/ZumoDeFrutas.jpg'
      ],
      platos: [
        { id: 6, nombre: 'Refrescos Variados', precio: 2.50, kcal: 140 },
        { id: 7, nombre: 'Cerveza Importación', precio: 3.50, kcal: 155 }
      ]
    },
    otras: { 
      titulo: 'OTRAS', icono: '🍕', 
      imagenes: [
        '/imagenes/otras/Carbonara.jpg', '/imagenes/otras/Champiñones.jpg', 
        '/imagenes/otras/Cuatro Quesos.jpg', '/imagenes/otras/Hawaiana.jpg', 
        '/imagenes/otras/Margherita.jpg', '/imagenes/otras/Marinera.jpg', 
        '/imagenes/otras/Napolitana.jpg', '/imagenes/otras/Pepperoni.jpg', 
        '/imagenes/otras/Rústica.jpg'
      ],
      platos: [
        { id: 8, nombre: 'Pizza Margarita', precio: 12.00, kcal: 850 },
        { id: 9, nombre: 'Pizza Especial', precio: 14.50, kcal: 920 }
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
