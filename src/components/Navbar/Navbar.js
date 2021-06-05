import React, {Component} from "react";
import {Route, Link} from "react-router-dom";

const navs = [
    {
        name: "Home",
        to: "/",
        exact: true
    },
    {
        name: "Products",
        to: "/products",
        exact: true
    }
];

/**
 *
 * @param label
 * @param to
 * @param activeOnlyWhenExact
 * @returns {*}
 * @constructor
 */
const NavLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match}) => {
                let active = match ? 'active' : '';
                return (
                    <li className={`nav-item ${active}`}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <Link to={to} className="nav-link">
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
};

class Navbar extends Component {
    /**
     *
     * @param navs
     * @returns result
     */
    showNav = (navs) => {
        let result = null;
        if (navs.length > 0) {
            result = navs.map((nav, index) => {
                return (
                    <NavLink
                        key={index}
                        label={nav.name}
                        to={nav.to}
                        exact={nav.exact}
                    />
                );
            })
        }
        return result
    };
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    { this.showNav(navs)}
                </ul>
            </nav>
        );
    }
}

export default Navbar;
