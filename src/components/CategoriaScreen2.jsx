function CategoriaScreen2({ titulo, opciones }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>{titulo}</h2>
      <ul>
        {opciones.map((opt, i) => (
          <li key={i}>{opt.nombre} - ${opt.precio}</li>
        ))}
      </ul>
      <button onClick={() => window.location.reload()}>Volver</button>
    </div>
  );
}
export default CategoriaScreen2;
