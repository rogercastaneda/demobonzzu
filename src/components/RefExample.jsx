import React, { useRef } from 'react';

const RefExample = () => {
  const inputRef = useRef();

  const handleClick = () => {
    // Enfocar el input al hacer clic en el botón
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Enfocar Input</button>
    </div>
  );
};

export default RefExample;
