import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Melonn App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/orderLists"
                    >
                        Order Lists
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        exact
                        to="/newOrder"
                    >
                        New Order
                    </NavLink>
                </div>
            </div>

        </nav>
    )
}