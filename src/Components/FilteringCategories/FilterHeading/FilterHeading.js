import React from 'react';

const FilterHeading = () => {
    return (
        <nav className="navbar navbar-expand navbar-light">
            <div className="container-fluid">
            <div className="" id="">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">All</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Photos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Videos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Freebies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">360</a>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Recommended
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="/">Most Recent</a></li>
                                <li><a className="dropdown-item" href="/">Most View</a></li>
                                <li><a className="dropdown-item" href="/">Most Downloaded</a></li>
                                <li><a className="dropdown-item" href="/">Most Appreciated</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default FilterHeading;