import React, { Component } from 'react';
import { FormControl } from 'material-ui/Form'
import Input, { InputLabel } from 'material-ui/Input'
import Button from 'material-ui/Button'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  render() {
    return (
        <div style={styles.container}>
          <FormControl style={styles.container}>
            <InputLabel htmlFor="name-simple">Search</InputLabel>
            <Input id="name-simple" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
            <div style={styles.btnContainer}>
              <Button
                color="secondary"
                variant="raised"
                style={styles.btn}
                onClick={() => this.props.handleReset()}
              >
                clear
              </Button>
              <Button
                color="primary"
                variant="raised"
                style={styles.btn}
                onClick={() => this.props.searchContacts(this.state.name)}
              >
                search
              </Button>
            </div>
          </FormControl>
        </div>
    )
  }
}

const styles = {
  container: {
    width: '100%'
  },
  btnContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  btn: {
    width: '50%'
  }
}
