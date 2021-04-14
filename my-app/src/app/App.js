import React from 'react';
import {
  BrowserRouter as Router } from "react-router-dom";
import styles from './App.module.css';
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
