import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar'
import TaskList from './components/TaskList'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <TaskList />
      </div>
    );
  }
}

export default App;
