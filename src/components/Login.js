import React, { Component } from 'react'
import { Redirect } from 'react-router';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            pwd: ''
        }
    }

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onLogin = (e) => {
        // e.preventDefault();
        let { username, pwd } = this.state;
        if (username === 'admin' && pwd === 'admin') {
            localStorage.setItem("login", JSON.stringify({
                username: username,
                password: pwd
            }))
        }
    }
    render() {
        let { username, pwd } = this.state;
        let loggedInUser = localStorage.getItem("login");
        if (loggedInUser !== null) {
        let { location } = this.props;
            return <Redirect to={
                {
                    pathname:'/products',
                    state:{
                        from: location
                    }
                }
            } />
        }
        return (
            <div className="container mt-4">
                <h1 className="mx-auto">Đăng nhập</h1>
                <form onSubmit={this.onLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Email address:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter email"
                            id="username"
                            name="username"
                            value={username}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            id="pwd"
                            name="pwd"
                            value={pwd}
                            onChange={this.onChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mx-auto block">Submit</button>
                </form>
            </div>
        )
    }
}
