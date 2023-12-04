import React from 'react';

import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Welcome } from './components/Welcome/Welcome';
import { Content } from './components/Content/Content';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/ramsey" element={<Content />} />
      </Routes>
    </div>
  );
};

export default App;