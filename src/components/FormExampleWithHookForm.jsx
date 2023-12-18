import React from 'react';
import { useForm } from 'react-hook-form';

const FormExampleWithHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Lógica de autenticación con email y password
    console.log('Formulario enviado:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email:
        <input type="email" {...register('email', { required: 'Campo obligatorio' })} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </label>
      <br />
      <label>
        Contraseña:
        <input type="password" {...register('password', { required: 'Campo obligatorio' })} />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </label>
      <br />
      <label>
        Ciudad:
        <input type="text" {...register('ciudad', { required: 'Campo obligatorio' })} />
        {errors.ciudad && <p style={{ color: 'red' }}>{errors.ciudad.message}</p>}
      </label>
      <br />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default FormExampleWithHookForm;
