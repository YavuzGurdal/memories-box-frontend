import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => { // variant=renk.  children=mesaj
    return (
        <Alert variant={variant}>
            {children}
        </Alert>
    )
}

Message.defaultProps = { // bu sekilde default degerler verebilirim
    variant: 'danger',
}

export default Message
