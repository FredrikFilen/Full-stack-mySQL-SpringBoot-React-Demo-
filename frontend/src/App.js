import React, { Component } from 'react';
import AddEmployee from './components/AddEmployee';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Table from "./components/Table.js";
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={AddEmployee}/>
      <Route exact path="/view" component={Table}/>
    </Router>
  );
}

export default App;
