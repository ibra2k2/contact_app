import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import { ContactItem } from "./contactitem";

export class ContactList extends React.Component{
  render(){
  	let filteredContacts=this.props.contacts.filter(
          (contact)=> contact.name.indexOf(this.props.filterText) !== -1
  		);
    return(
    <div className="container">	
      <ul>
        {filteredContacts.map((contact) => 
        	<ContactItem key={contact.email}
                        name={contact.name}
                        email={contact.email} />
        )}
       </ul>
       </div>
    )
  }
}

ContactList.propTypes={
	contactsArray: PropTypes.arrayOf(PropTypes.object),
}



