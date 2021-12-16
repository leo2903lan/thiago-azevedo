import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Sobre from './pages/Sobre';

export default function Rotas() {
  return (
      <Routes>
        <Route path="/thiago-azevedo" element={ <Home /> }  />
        <Route path="/sobre" element={ <Sobre /> } />
        <Route path="/contato" element={ <Contato /> } />
        <Route path="/servicos" element={ <Servicos /> } />
        <Route path="/blog" element={ <Blog /> } />
      </Routes>
  )
}