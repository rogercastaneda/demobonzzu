import React, { useState } from 'react';

const FormExample = () => {
  const [username, setUsername] = useState('');
  const [pet, setPet] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleChangePet = (e) => {
    setPet(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre de usuario enviado:', username);
    console.log('Pet enviado:', pet);
    // Lógica adicional aquí...
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre de Usuario:
        <input type="text" value={username} onChange={handleChange} />
      </label>
      <br />
      <label>
        Pet:
        <input type="text" value={pet} onChange={handleChangePet} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormExample;
