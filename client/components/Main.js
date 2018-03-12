import React, { Component } from 'react';
import axios from 'axios'
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import NewContactForm from './NewContactForm'
import arraySort from 'array-sort'
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContact: null,
      contacts: [],
      newContactMode: false
    };
    this.selectContact = this.selectContact.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.toggleNewContactMode = this.toggleNewContactMode.bind(this)
  }
  toggleNewContactMode() {
      this.setState({ newContactMode: !this.state.newContactMode })
  }
  selectContact(contact) {
    this.setState({ selectedContact: contact })
  }

  handleDelete(id) {
    axios.delete(`http://localhost:8080/api/contacts/${id}`)
    .then(res => res.data)
    .then(data => {
        console.log(data)
        // remove deleted contact from local state
        this.setState({ contacts: this.state.contacts.filter(contact => contact.id !== id), selectedContact: null })
    })
    .catch(err => console.log(err))
  }

  handleEdit(contact) {
    axios.put('http://localhost:8080/api/contacts', contact)
    .then(res => res.data)
    .then(data => {
        console.log(data)
        // find edited contact in local state and change.
        let contacts = this.state.contacts.map(item => {
            if (item.id === contact.id && data[0]) return data[1][0]
            else return item
        })
        contacts = arraySort(contacts, 'last')
        this.setState({ contacts, selectedContact: data[1][0] })
    })
    .catch(err => console.log(err))
  }
  handleCreate(contact) {
    axios.post('http://localhost:8080/api/contacts', contact)
    .then(res => res.data)
    .then(data => {
        this.setState({ contacts: arraySort([...this.state.contacts, data], 'last') })
        this.toggleNewContactMode()
        this.selectContact(data)
        
    })
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
            toggleNewContactMode={this.toggleNewContactMode}
        />
        {
            this.state.newContactMode ? 
            <NewContactForm handleCreate={this.handleCreate} /> :
            <ContactDetails
                contact={this.state.selectedContact}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
            />
        }
      </div>
    );
  }
}

const styles = {
    container: {
        display: 'flex',
        width: '100%',
        maxHeight: '100%'
    }
}
