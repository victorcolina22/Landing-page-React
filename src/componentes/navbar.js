import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
    return (

        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <a className="navbar-brand" href={props.texto1}>{props.texto1}</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 justify-content-right">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="navbar-brand" href={props.texto2}>{props.texto2}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={props.texto3}>{props.texto3}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={props.texto4}>{props.texto4}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={props.texto5}>{props.texto5}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    texto1: PropTypes.string,
    texto2: PropTypes.string,
    texto3: PropTypes.string,
    texto4: PropTypes.string,
    texto5: PropTypes.string
}

export default Navbar;