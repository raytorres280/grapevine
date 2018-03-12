import React from 'react'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'

const ContactDetails = (props) => {
    const _renderDetails = () => {
        if (props.contact) {
            return (
                <div style={styles.container}>
                    <img style={styles.img} src="profile_placeholder.png" alt="Mountain View" />
                    <List>
                        {
                            Object.keys(props.contact).map(key => (
                                <div key={key}>
                                    <ListItem>
                                        <ListItemText
                                            inset
                                            primary={key}
                                            secondary={props.contact[key]}
                                        />
                                    </ListItem>
                                    <Divider />
                                </div>
                            ))
                        }
                    </List>
                </div>
            )
        } else {
            return (
                <h1>no data</h1>
            )
        }
    }

    return (
      <div style={styles.container}>
        {
            _renderDetails()
        }
      </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        width: '75%',
        justifyContent: 'center'
    },
    img: {
        height: 300,
        width: 300
    }
}
export default ContactDetails
