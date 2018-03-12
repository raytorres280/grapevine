import React, { Component } from 'react'
import Button from 'material-ui/Button'
import { FormControl } from 'material-ui/Form'
import TextField from 'material-ui/TextField'

export default class NewContactForm extends Component {
  constructor(props) {
      super(props)
      this.state = {
          first: '',
          last: '',
          email: '',
          phone: '',
          address: '',
          showErr: false,
      }
  }
  onCreateButtonPress() {
      let contact = {...this.state}
      if (this.state.first.length < 1 || this.state.last.length < 1) {
        this.setState({ showErr: true })
    } else {
        this.props.handleCreate(contact)
    }
  }
  onCancelButtonPress() {
      this.props.toggleNewContactMode()
  }
  render() {
      let errMsg = null
      if (this.state.showErr) {
          errMsg = <h3>Please fill at least a first and last name.</h3>
      }
    return (
        <div style={styles.container}>
            <img
                style={styles.img}
                src="profile_placeholder.png"
                alt="Mountain View"
            />
            {
                errMsg
            }
            <FormControl style={styles.container}>
                <TextField
                    id="first"
                    label="first"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    value={this.state.first}
                    onChange={(e) => this.setState({ first: e.target.value })}
                />
                <TextField
                    id="last"
                    label="last"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    value={this.state.last}
                    onChange={(e) => this.setState({ last: e.target.value })}
                />
                <TextField
                    id="email"
                    label="email"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                />
                <TextField
                    id="phone"
                    label="phone"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    value={this.state.phone}
                    onChange={(e) => this.setState({ phone: e.target.value })}
                />
                <TextField
                    id="address"
                    label="address"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    value={this.state.address}
                    onChange={(e) => this.setState({ address: e.target.value })}
                />
                <Button style={styles.formBtn} color="primary" variant="raised" onClick={() => this.onCreateButtonPress()}>
                    Create
                </Button>
                <Button style={styles.formBtn} color="secondary" variant="raised" onClick={() => this.onCancelButtonPress()}>
                    Cancel
                </Button>
            </FormControl>
        </div>
    )
  }
}

const styles = {
    container: {
        display: 'flex',
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    img: {
        height: 300,
        width: 300
    },
    btn: {
        diplay: 'flex',
        width: 300,
        marginBottom: 10
    },
    formBtn: {
        width: 167,
        marginBottom: 10
    }
}