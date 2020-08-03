import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import CounterGroup from './features/counterGroup/counterGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup />

      </header>
    </div>
  );
}

export default App;
