import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import { Header } from '../features/header/header';
import { Main } from '../features/main/main';


function App() {
  return (
  <Router>
    {/* Common Header for all SPA*/}
    <Header />
    <Main />
  </Router>);
}

export default App;
