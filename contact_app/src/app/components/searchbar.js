import React from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'prop-types';

export class SearchBar extends React.Component{
	handleChange(event){
		this.props.onUserInput(event.target.value);
	}
	render(){

		return(
			<div className="container" className="search">
			  <input type="search" placeholder="Search" value={this.props.filterText} onChange={this.handleChange.bind(this)}/>
			</div>
		);
	}
}

SearchBar.propTypes={
	onUserInput: PropTypes.func.isRequired,
	filterText: PropTypes.string.isRequired,
};

