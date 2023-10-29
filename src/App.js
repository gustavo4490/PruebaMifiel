import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FuncionHash from './paginas/funcionHash';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FuncionHash />} />
        <Route path="/hash" element={<FuncionHash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
