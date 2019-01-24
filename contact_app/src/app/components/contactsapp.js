import React from 'react';
import ReactDOM from 'react-dom';
import { SearchBar } from "./searchbar";
import { ContactList } from "./contactlist";
import PropTypes from "prop-types";


export class ContactsApp extends React.Component{
	constructor(props){
		super(props);
		this.state={
			filterText: '',
		};
	}
	handleUserInput(searchTerm){
		this.setState({filterText:searchTerm});
	}
	render(){
		return(
			<div className="container">
			 <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
			 <ContactList contacts={this.props.contacts} filterText={this.state.filterText}/>
			</div>
		);
	}
}


ContactsApp.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object),
}

