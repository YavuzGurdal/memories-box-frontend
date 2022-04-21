import React from 'react'
import { Container } from 'react-bootstrap'
import UpdateMemory from '../components/UpdateMemory'

import { useParams } from 'react-router'

const UpdateScreen = () => {
    const { id } = useParams() // bununla bulundugum url deki url'den butun bilgileri cekebilirim. burda id lazim oldugu icin id'yi cektim
    return (
        <>
            <Container>
                <UpdateMemory id={id} />
            </Container>
        </>
    )
}

export default UpdateScreen
