import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="nav-items d-flex justify-content-between">
                        <Link to='/'>Home</Link>
                        <Link to='/form'>Employee Form</Link>
                    </div>
                </div>
            </div>
        </nav>
  );
}

export default Navbar
