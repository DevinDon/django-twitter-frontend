import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './router';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </>
  );
}

export default App;
