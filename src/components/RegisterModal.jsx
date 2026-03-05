import React, { useState } from 'react';

export default function RegisterModal({ open, onClose, onRegister }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: '', email: '', password: '', telefono: '', direccion: '', ciudad: '', cp: ''
  });
  const [error, setError] = useState('');

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre.trim()) return setError('El nombre es obligatorio');
    if (!formData.email.includes('@')) return setError('Email inválido');
    if (formData.password.length < 6) return setError('Mínimo 6 caracteres');
    
    if (step === 1) { setStep(2); return; }
    
    if (!formData.direccion.trim()) return setError('La dirección es obligatoria');
    onRegister(formData);
  };

  const inputStyle = { width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem' };

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000, padding: '1rem' }} onClick={onClose}>
      <div style={{ background: '#fff', borderRadius: '24px', padding: '2rem', maxWidth: '450px', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', borderTop: '5px solid #f9a826' }} onClick={e => e.stopPropagation()}>
        <h2 style={{ color: '#01400e', fontFamily: 'serif', margin: 0 }}>
          {step === 1 ? '📝 Crear cuenta' : '📍 Entrega'}
          <span style={{ fontSize: '0.8rem', color: '#f9a826', float: 'right' }}>Paso {step}/2</span>
        </h2>
        <hr style={{ border: 'none', borderBottom: '1px solid #eee', margin: '15px 0' }} />

        <form onSubmit={handleSubmit}>
          {step === 1 ? (
            <>
              <input name="nombre" placeholder="Nombre completo" onChange={handleChange} style={inputStyle} value={formData.nombre} />
              <input name="email" type="email" placeholder="Email" onChange={handleChange} style={inputStyle} value={formData.email} />
              <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} style={inputStyle} value={formData.password} />
              <input name="telefono" placeholder="Teléfono" onChange={handleChange} style={inputStyle} value={formData.telefono} />
            </>
          ) : (
            <>
              <input name="direccion" placeholder="Calle y número" onChange={handleChange} style={inputStyle} value={formData.direccion} />
              <div style={{ display: 'flex', gap: '10px' }}>
                <input name="ciudad" placeholder="Ciudad" onChange={handleChange} style={{...inputStyle, flex: 2}} value={formData.ciudad} />
                <input name="cp" placeholder="C.P." onChange={handleChange} style={{...inputStyle, flex: 1}} value={formData.cp} />
              </div>
            </>
          )}

          {error && <p style={{ color: 'red', fontSize: '0.8rem' }}>{error}</p>}

          <button type="submit" style={{ width: '100%', padding: '12px', background: '#01400e', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer' }}>
            {step === 1 ? 'Siguiente ➔' : 'Finalizar Registro'}
          </button>
          <button type="button" onClick={onClose} style={{ width: '100%', background: 'none', border: 'none', color: '#999', marginTop: '10px', cursor: 'pointer' }}>Cancelar</button>
        </form>
      </div>
    </div>
  );
}
