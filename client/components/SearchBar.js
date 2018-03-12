import React, { Component } from 'react';
import { FormControl, FormHelperText } from 'material-ui/Form'
import Input, { InputLabel } from 'material-ui/Input'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
        <div>
          <FormControl>
            <InputLabel htmlFor="name-simple">Name</InputLabel>
            <Input id="name-simple" value={this.state.name} onChange={this.handleChange} />
          </FormControl>
        </div>
    )
  }
}
