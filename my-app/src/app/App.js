import React from 'react';
import {
  BrowserRouter as Router } from "react-router-dom";
import styles from './App.module.css';
import { Header } from '../features/header/header';
import { Main } from '../features/main/main';
import {selectTheme } from '../features/header/toggleTheme/toggleSlice';
import {useSelector} from 'react-redux';

function App() {
  const theme = useSelector(selectTheme);

  return (
    <body className={theme ? styles.darkTheme : styles.lightTheme}>
      <Router>
        <Header />
        <Main />
      </Router>
    </body>
  );
}

export default App;
