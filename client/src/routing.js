import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import SignIn from './containers/SignIn'

import 'bootstrap/dist/css/bootstrap.min.css'

const routing = (
    <Router>
        <Route exact path="/" component={SignIn} />
    </Router>
)

export default routing