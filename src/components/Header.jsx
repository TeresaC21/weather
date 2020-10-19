import React from 'react'

const Header = ({ tittle }) => {
    return (
        <nav>
            <div className="nav-wrapper deep-purple accent-1">
                <a href="#!" className="brand-logo">{tittle}</a>
            </div>
        </nav>
    );
}

export default Header;