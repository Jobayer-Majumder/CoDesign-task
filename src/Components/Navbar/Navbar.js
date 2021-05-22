import React from 'react';
import brandLogo from '../../images/Group 289@1X.png';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light p-3">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src={brandLogo} alt="" />
            </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Explore</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Discover</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">For Professionals</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ...
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Pricing</a></li>
                                <li><a className="dropdown-item" href="/">License</a></li>
                                <li><a className="dropdown-item" href="/">Partnerships</a></li>
                                <li><a className="dropdown-item" href="/">Blog</a></li>
                                <li><a className="dropdown-item" href="/">Help</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-danger">Submit Photos</button>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Login</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-danger">Join Free</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;