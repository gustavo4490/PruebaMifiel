import React, { useState } from 'react';
import { SHA256 } from 'crypto-js';

function calculateProofOfWork(difficulty, challenge) {
  let nonce = 0;
  const prefix = '0'.repeat(difficulty);

  while (true) {
    const data = challenge + nonce;
    const hash = SHA256(data).toString();

    if (hash.startsWith(prefix)) {
      return nonce;
    }

    nonce++;
  }
}

export default function AlgoritmoHashCash() {
  const [difficulty, setDifficulty] = useState(3);
  const [challenge, setChallenge] = useState("e958df8d8fe51a2653719327961f");
  const [result, setResult] = useState(null);

  const handleCalculateClick = () => {
    const nonce = calculateProofOfWork(difficulty, challenge);
    setResult(nonce);
  };

  return (
    <div>
      <h1>Proof of Work Calculator</h1>
      <label>Difficulty:</label>
      <input
        type="number"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      />
      <br />
      <label>Challenge:</label>
      <input
        type="text"
        value={challenge}
        onChange={(e) => setChallenge(e.target.value)}
      />
      <br />
      <button onClick={handleCalculateClick}>Calculate PoW</button>
      {result !== null && (
        <div>
          <label>Nonce:</label>
          <span>{result}</span>
        </div>
      )}
    </div>
  );
}
