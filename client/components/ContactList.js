import React, { Component } from 'react';
import SearchBar from './SearchBar';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button'

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
        (item.first.toLowerCase().includes(searchField) || item.last.toLowerCase().includes(searchField)))
    this.setState({ contacts: results })
  }
  handleReset() {
      this.setState({ contacts: this.props.contacts })
  }
  _renderContacts() {
      if (this.state.contacts.length < 1) {
        return (
                <ListItem>
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
    return (
      <div style={styles.container}>
        <SearchBar searchContacts={this.searchContacts} handleReset={this.handleReset} />
        <List style={styles.list}>
            {
                this._renderContacts()
            }
        </List>
        <Button iconClassName="" onClick={() => this.props.toggleNewContactMode()} variant="fab" color="primary">+</Button>
      </div>
    );
  }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '25%',
        maxHeight: '75%',
    },
    searchBar: {
        width: '100%'
    },
    list: {
        width: '100%',
        maxHeight: '75%',
        overflowY: 'scroll'
    }
}
