import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export class ContactItem extends React.Component{
	render(){
		return(
			<div className="container">
			  <li>{this.props.name} - {this.props.email}</li>
			</div>
		);
	}
}


ContactItem.propTypes={
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
}