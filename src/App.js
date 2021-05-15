import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import routes from './routes'
import './App.css'
export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <Navbar />
                    {/* Nội dung */}
                    <Switch>
                        {this.showContentMenu(routes)}
                    </Switch>
                </div>
            </Router>
        )
    }
    showContentMenu = (routes) => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path} 
                        exact={route.exact} 
                        component={route.main} />
                );
            })
        }
        return result;
    }
}
