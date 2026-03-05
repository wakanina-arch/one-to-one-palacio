import React, { useState } from 'react';
import WelcomeInicio from './WelcomeInicio';
import CategoriaScreen2 from './components/CategoriaScreen2';

function App() {
  const [pantalla, setPantalla] = useState('welcome');
  const [categoriaActual, setCategoriaActual] = useState(null);

  const database = {
    primero: { 
      titulo: 'COMPLEMENTOS', icono: '🍟', folder: 'primero',
      platos: [
        { id: 101, nombre: 'Alitas BBQ (6uds)', precio: 8.50, kcal: 420 },
        { id: 102, nombre: 'Patatas Bravas', precio: 6.00, kcal: 380 },
        { id: 103, nombre: 'Nachos con Queso', precio: 9.50, kcal: 510 },
        { id: 104, nombre: 'Pinchos Morunos', precio: 7.50, kcal: 340 },
        { id: 105, nombre: 'Tabla Flamenca', precio: 14.00, kcal: 650 },
        { id: 106, nombre: 'Bowl Patatas Fritas', precio: 4.50, kcal: 310 },
        { id: 107, nombre: 'Combos Especiales', precio: 18.00, kcal: 890 },
        { id: 108, nombre: 'Pollo Broster', precio: 12.50, kcal: 550 },
        { id: 109, nombre: 'Pincho de Verduras', precio: 5.50, kcal: 120 }
      ]
    },
    segundo: { 
      titulo: 'ENSALADAS', icono: '🥗', folder: 'segundo',
      platos: [
        { id: 201, nombre: 'Ensalada César', precio: 11.50, kcal: 540 },
        { id: 202, nombre: 'Ensalada Caprese', precio: 10.00, kcal: 320 },
        { id: 203, nombre: 'Ensalada Alemana', precio: 9.50, kcal: 410 },
        { id: 204, nombre: 'Ensalada Griega', precio: 10.50, kcal: 290 },
        { id: 205, nombre: 'Ensaladilla Rusa', precio: 8.50, kcal: 380 },
        { id: 206, nombre: 'Ensalada de Pasta', precio: 9.00, kcal: 420 },
        { id: 207, nombre: 'Ensalada de Pollo', precio: 11.00, kcal: 480 },
        { id: 208, nombre: 'Ensalada Mixta', precio: 7.50, kcal: 180 },
        { id: 209, nombre: 'Ensalada de Garbanzos', precio: 8.50, kcal: 310 }
      ]
    },
    postres: { 
      titulo: 'BEBIDAS', icono: '🥤', folder: 'postres',
      platos: [
        { id: 301, nombre: 'Agua Mineral', precio: 2.00, kcal: 0 },
        { id: 302, nombre: 'Coca Cola / Pepsi', precio: 2.50, kcal: 140 },
        { id: 303, nombre: 'Fanta Naranja/Limón', precio: 2.50, kcal: 130 },
        { id: 304, nombre: 'Cerveza Club', precio: 3.00, kcal: 150 },
        { id: 305, nombre: 'Cerveza Heineken', precio: 3.50, kcal: 150 },
        { id: 306, nombre: 'Cerveza Guinness', precio: 4.50, kcal: 210 },
        { id: 307, nombre: 'Zumo de Frutas', precio: 2.80, kcal: 90 },
        { id: 308, nombre: 'Zumos Verdes', precio: 3.80, kcal: 70 },
        { id: 309, nombre: 'Guaraná', precio: 2.50, kcal: 110 }
      ]
    },
    otras: { 
      titulo: 'PIZZAS', icono: '🍕', folder: 'otras',
      platos: [
        { id: 401, nombre: 'Pizza Margarita', precio: 12.00, kcal: 820 },
        { id: 402, nombre: 'Pizza Carbonara', precio: 14.50, kcal: 980 },
        { id: 403, nombre: 'Pizza 4 Quesos', precio: 13.90, kcal: 910 },
        { id: 404, nombre: 'Pizza Pepperoni', precio: 14.00, kcal: 950 },
        { id: 405, nombre: 'Pizza Hawaiana', precio: 13.50, kcal: 880 },
        { id: 406, nombre: 'Pizza Marinera', precio: 15.00, kcal: 790 },
        { id: 407, nombre: 'Pizza Napolitana', precio: 13.00, kcal: 840 },
        { id: 408, nombre: 'Pizza Rústica', precio: 14.50, kcal: 920 },
        { id: 409, nombre: 'Pizza Champiñones', precio: 12.50, kcal: 810 }
      ]
    }
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
        <CategoriaScreen2 
          categoria={database[categoriaActual]} 
          onBack={() => setPantalla('welcome')} 
        />
      )}
    </div>
  );
}
export default App;
