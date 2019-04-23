import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar'
import TaskList from './components/TaskList'
import TaskModal from './components/TaskModal'
import { Container } from 'reactstrap'
import queryString from 'query-string'

import { Provider } from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {

  componentWillMount() {
    let query = queryString.parse(this.props.location.search)
    if(query.token) {
      window.localStorage.setItem("jwt", query.token)
      this.props.history.push("/")
    }
  }

  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <AppNavbar />
                <TaskModal />
                <TaskList />
            </div>
        </Provider>
    );
  }
}

export default App;
