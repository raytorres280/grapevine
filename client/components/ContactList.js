import React, { Component } from 'react';
import SearchBar from './SearchBar';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

export default class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _renderContacts() {
      return this.props.contacts.map(item => (
        <ListItem key={item.id} button onClick={() => this.props.selectContact(item)}>
            <ListItemText inset primary={item.first + ' ' + item.last} />
        </ListItem>
      ))
  }
  render() {
      console.log(this.props)
    return (
      <div style={styles.container}>
        <SearchBar />
        <List>
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
        width: '25%'
    }
}
