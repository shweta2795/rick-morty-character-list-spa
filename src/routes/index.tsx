import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterList from '../component/CharacterList';
import CharacterDetail from '../component/CharacterDetails';

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CharacterList />} />
      <Route path="/character/:id" element={<CharacterDetail />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
