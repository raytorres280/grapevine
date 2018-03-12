import React, { Component } from 'react';
import axios from 'axios'
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContact: null,
      contacts: []
    };
    this.selectContact = this.selectContact.bind(this)
  }

  selectContact(contact) {
    this.setState({ selectedContact: contact })
  }

  handleDelete() {
    axios.delete('http://localhost:8080/api/contacts', {

    })
    .then(res => res.data)
    .then(data => {
        console.log(data)
        this.setState({ contacts: data })
    })
    .catch(err => console.log(err))
  }

  handleEdit() {
    axios.put('http://localhost:8080/api/contacts', {
        
    })
    .then(res => res.data)
    .then(data => {
        console.log(data)
        this.setState({ contacts: data })
    })
    .catch(err => console.log(err))
}
  componentDidMount() {
    axios.get('http://localhost:8080/api/contacts')
    .then(res => res.data)
    .then(data => {
        console.log(data)
        this.setState({ contacts: data })
    })
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div style={styles.container}>
        <ContactList
            contacts={this.state.contacts}
            selectContact={this.selectContact}
        />
        <ContactDetails
            contact={this.state.selectedContact}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

const styles = {
    container: {
        display: 'flex',
        width: '100%',
        height: '100%'
    }
}