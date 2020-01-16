import React from 'react';
import logo from './logo.svg';
import './App.css';
import BarradeNavegacion from './components/Pages/BarradeNavegacion'
import Main from './components/Pages/Main'

const App: React.FC = () => {
  return (
    <div className="App">
     <BarradeNavegacion/>
      <Main />

    </div>
  );
}

export default App;
