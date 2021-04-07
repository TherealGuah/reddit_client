import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import './App.css';
import { Header } from '../features/header/header';

function App() {
  return (
  <Router>
    <Header />
    <main>
      <h1>Here be Main</h1>
    </main>
  </Router>);
}

export default App;
