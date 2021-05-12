import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
export default class App extends Component {
    render() {
        return (

            <Router>
                <div className="App">
                    {/* Menu */}
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Trang chủ </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Liên hệ </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">Giới thiệu</Link>
                                </li>

                            </ul>
                        </div>
                    </nav>
                    {/* Nội dung */}
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                </div>
            </Router>
        )
    }
}
