import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FuncionHash from './paginas/funcionHash';
import Algoritmohashcash from './paginas/algoritmohashcash';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FuncionHash />} />
        <Route path="/hash" element={<FuncionHash />} />
        <Route path="/cash" element={<Algoritmohashcash />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
