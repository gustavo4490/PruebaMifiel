import React, { useState } from 'react';
import { SHA256 } from 'crypto-js';

export default function FuncionHash() {
  const [inputText, setInputText] = useState('');
  const [hashResult, setHashResult] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  }

  const calculateHash = () => {
    const hash = SHA256(inputText).toString();
    setHashResult(hash);
  }

  return (
    <div>
      <h1>Funcion Hash</h1>
      <input type="text" onChange={handleInputChange} />
      <button onClick={calculateHash}>Calcular Hash</button>
      <p>Resultado del Hash: {hashResult}</p>
    </div>
  );
}
