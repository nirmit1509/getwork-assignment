import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
