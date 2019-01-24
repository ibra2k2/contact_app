import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import { PropTypes } from 'prop-types';
import { ContactsApp } from './contactsapp';

export class ContactsAppContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      contacts: [],
    };
  }
  componentDidMount(){
    fetch('./contacts.json')
    .then((response)=>response.json())
    .then((responseData)=>{
      this.setState({contacts: responseData});
    })
    .catch((error) =>{
      console.log('Error fetching and parsing data', error);
    });
  }
  render(){
    return(
      <div>
        <ContactsApp contacts={this.state.contacts} />
      </div>
    );
  }
}

ContactsAppContainer.propTypes={
  contacts: PropTypes.arrayOf(PropTypes.object),
}

