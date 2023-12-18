import React, { useState, useEffect } from 'react';

const useFetchTodo = (todoId) => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error al cargar datos:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [todoId]); // El segundo argumento es un array de dependencias, [] significa que solo se ejecuta una vez al montarse.])

  return data; // Devuelve los datos cargados o null si no se han cargado.
};

const LifecycleExample = () => {
  const data = useFetchTodo(1); // Carga los datos del todo con id 1. El id se puede cambiar para cargar datos de otro todo.

  return (
    <div>
      <h1>Ejemplo de Ciclo de Vida en Componente Funcional</h1>
      {data ? <p>Datos cargados: {data.title}</p> : <p>Cargando datos...</p>}
      <SampleText />
    </div>
  );
};

export default LifecycleExample;

const SampleText = () => <p>Este es un ejemplo de texto.</p>;
