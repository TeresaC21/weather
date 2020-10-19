import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ tittle }) => {
    return (
        <nav>
            <div className="nav-wrapper deep-purple darken-4">
                <a href="#!" className="brand-logo">{tittle}</a>
            </div>
        </nav>
    );
}

Header.propTypes = {
    tittle: PropTypes.string.isRequired
}

export default Header;