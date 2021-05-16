import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

const menus = [
    {
        label: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        label: 'Giới thiệu',
        to: '/about',
        exact: false
    },
    {
        label: 'Liên hệ',
        to: '/contact',
        exact: false
    },
    {
        label: 'Sản phẩm',
        to: '/products',
        exact: false
    }

]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            let active = match ? 'active nav-item' : '';
            return (
                <li className={`my-li ${active}`}>
                    <Link to={to} className="nav-link">
                        {label}
                    </Link>
                </li>
            )
        }} />
    )
}
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {this.showMenu(menus)}
                    </ul>
                </div>
            </nav>
        );
    }
    showMenu = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.label}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}

                    />
                );
            });
        }
        return result;
    }
}
