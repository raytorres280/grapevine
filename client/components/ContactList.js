import React, { Component } from 'react';
import SearchBar from './SearchBar';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

export default class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        contacts: []
    };
    this.handleReset = this.handleReset.bind(this)
    this.searchContacts = this.searchContacts.bind(this)
  }
  componentWillReceiveProps(newProps) {
      this.setState({ contacts: newProps.contacts })
  }
  searchContacts(searchField) {
    let results = this.props.contacts.filter(item => 
        (item.first.toLowerCase().includes(searchField) ||item.last.toLowerCase().includes(searchField)))
    this.setState({ contacts: results })
  }
  handleReset() {
      this.setState({ contacts: this.props.contacts })
  }
  _renderContacts() {
      if (this.state.contacts.length < 1) {
        return (
            <ListItem button onClick={() => this.props.selectContact(item)}>
                <ListItemText inset primary={'No Data'} />
            </ListItem>
        )
      }
      return this.state.contacts.map(item => (
        <ListItem key={item.id} button onClick={() => this.props.selectContact(item)}>
            <ListItemText inset primary={item.first + ' ' + item.last} />
        </ListItem>
      ))
  }
  render() {
      console.log(this.props)
    return (
      <div style={styles.container}>
        <SearchBar searchContacts={this.searchContacts} handleReset={this.handleReset} />
        <List style={styles.list} >
            {
                this._renderContacts()
            }
        </List>
      </div>
    );
  }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '25%'
    },
    searchBar: {
        width: '100%'
    },
    list: {
        width: '100%'
    }
}
