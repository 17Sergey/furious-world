import React from 'react';

import './App.css';
import { Welcome } from './components/Welcome/Welcome';
import { Content } from './components/Content/Content';

const App: React.FC = () => {
  return (
    <div className="App">
      <Welcome />
      <Content />
    </div>
  );
};

export default App;