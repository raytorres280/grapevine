import React from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Button from 'material-ui/Button'
import { FormControl } from 'material-ui/Form'
import TextField from 'material-ui/TextField'

export default class ContactDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editMode: false,
            first: '',
            last: '',
            email: '',
            phone: '',
            address: ''
        }
    }
    componentWillReceiveProps(newProps) {
        // reset component state whenever
        // there is a new contact coming in from props
        this.onCancelButtonPress()
        // if (newProps.contact) {
        //     if (newProps.contact.id !== this.props.contact.id) {
                
        //     }
        // }
    }
    onEditButtonPress() {
        let { first, last, email, phone, address } = this.props.contact
        this.setState({
            editMode: true,
            first,
            last,
            email,
            phone,
            address
        })
    }
    onDeleteButtonPress() {
        console.log('handle delete....')
        this.props.handleDelete(this.props.contact.id)
    }
    onSaveButtonPress() {
        console.log('handle save....')
        let { first, last, email, phone, address } = this.state
        this.props.handleEdit({
            id: this.props.contact.id,
            first,
            last,
            email,
            phone,
            address
        })
    }
    onCancelButtonPress() {
        console.log('cancel changes...')
        this.setState({
            editMode: false,
            first: '',
            last: '',
            email: '',
            phone: '',
            address: ''
        })
    }
    _renderDetails() {
        if (this.props.contact && this.state.editMode) {
            return (
                <div style={styles.container}>
                    <img
                        style={styles.img}
                        src="profile_placeholder.png"
                        alt="Mountain View"
                    />
                    <FormControl style={styles.container}>
                        {
                            Object.keys(this.props.contact).map(key => {
                                console.log(key !== 'id')
                                if (key !== 'id' && key !== 'createdAt' && key !== 'updatedAt') {
                                    return (
                                        <TextField
                                            key={key}
                                            id={key}
                                            label={key}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            margin="normal"
                                            value={this.state[key]}
                                            onChange={(e) => {
                                                let state = {}
                                                state[key] = e.target.value
                                                this.setState(state)
                                            }}
                                        />
                                    )
                                }
                            })
                        }
                        <Button style={styles.formBtn} color="primary" variant="raised" onClick={() => this.onSaveButtonPress()}>
                            Save Changes
                        </Button>
                        <Button style={styles.formBtn} color="secondary" variant="raised" onClick={() => this.onCancelButtonPress()}>
                            Cancel
                        </Button>
                    </FormControl>
                </div>
            )
        } else if (this.props.contact) {
            return (
                <div style={styles.container}>
                    <img
                        style={styles.img}
                        src="profile_placeholder.png"
                        alt="Mountain View"
                    />
                    <List>
                        {
                            Object.keys(this.props.contact).map(key => {
                                if (key !== 'id' && key !== 'createdAt' && key !== 'updatedAt') {
                                    return (
                                        <div key={key}>
                                            <ListItem>
                                                <ListItemText
                                                    inset
                                                    primary={key}
                                                    secondary={this.props.contact[key]}
                                                />
                                            </ListItem>
                                            <Divider />
                                        </div>
                                    )
                                }
                            })
                        }
                    </List>
                        <Button
                            variant="raised"
                            color="primary"
                            style={styles.btn}
                            onClick={() => this.onEditButtonPress()}
                        >
                                Edit
                            </Button>
                        <Button
                            variant="raised"
                            color="secondary"
                            style={styles.btn}
                            onClick={() => this.onDeleteButtonPress()}
                        >
                            Delete
                        </Button>
                </div>
            )
        } else {
            return (
                <h1>no data</h1>
            )
        }
    }
    render() {
        return (
        <div style={styles.container}>
            {
                this._renderDetails()
            }
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
