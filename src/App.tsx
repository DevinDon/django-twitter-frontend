import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import AppToolbar from './components/AppToolbar';
import Router from './router';

export const App = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === '/login' || pathname === '/signup' || <AppToolbar></AppToolbar>}
      <Router></Router>
    </>
  );
}

export default App;
