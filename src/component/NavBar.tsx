import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = ( ) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            </div>
        </nav>
        );
}

export default Navbar;
