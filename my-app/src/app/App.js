import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import { Header } from '../features/header/header';

function App() {
  return (
  <Router>
    {/* Common Header for all SPA*/}
    <Header />
    <Switch>
      <Route exact path="/individualPost">
        {/* <Post /> */}
      </Route>
      <Route exact path="/">
        {/* <PostsList /> */}
      </Route>
    </Switch>
  </Router>);
}

export default App;
