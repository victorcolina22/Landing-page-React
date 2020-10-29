import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
    return (
        <div className="footer">
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div className="container justify-content-center text-white">
                    {props.texto6}
                </div>
            </nav>
        </div>
    );
}

Footer.propTypes = {
    texto6: PropTypes.string
}

export default Footer;