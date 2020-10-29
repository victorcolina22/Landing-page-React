import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const MyJumbotron = props => {
	return(
        <div className="jumbotron m-6">
		<h1 className="display-4">{props.title}</h1>
		<p className="lead">{props.description}</p>
		<a className="btn btn-primary btn-lg" href={props.buttonURL} role="button">
			{props.buttonLabel}
		</a>
	</div>
    );
};

MyJumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonURL: PropTypes.string,
	buttonLabel: PropTypes.string
};

export default MyJumbotron;
