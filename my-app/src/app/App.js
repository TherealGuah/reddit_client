import React from 'react';
import {
  BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { Header } from '../features/header/header';
import { Main } from '../features/main/main';

function App() {
  return (
  <Router>
    <Header />
    <Main />
  </Router>);
}

export default App;
