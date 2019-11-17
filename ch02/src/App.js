import React, { Fragment } from 'react';
import './App.css';

function App() {
  const name = "리액트다";
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    padding: 16
  };

  return (
    <div className="react">
      <h1>{name}</h1>
    </div>
  );
}

export default App;
