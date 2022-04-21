import React from 'react'
import moment from 'moment'
import { Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { MdModeEdit, MdDelete } from 'react-icons/md';

import { deleteMemory } from '../axios/index.js';

const Memory = ({ memory }) => { // HomeScreen den props la gonderilen memory'yi yakaliyorum
    return (
        <>
            <Card className='rounded pb-3 my-3' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={memory.image} />
                <Card.Body>
                    <Card.Title style={{ color: 'darkblue' }} className='text-capitalize' >{memory.title}</Card.Title>
                    <Card.Text style={{ letterSpacing: '1px' }}>
                        {memory.content}
                    </Card.Text>
                    <Card.Title className='text-capitalize' ><span style={{ color: 'darkblue' }}>Creator: </span>{memory.creator}</Card.Title>
                    <Card.Subtitle>{moment(memory.createdAt).fromNow()}</Card.Subtitle>
                </Card.Body>
                <Card.Footer className='bg-white pb-0 d-flex justify-content-between'>
                    <LinkContainer to={`/update/${memory._id}`} style={{ cursor: 'pointer' }}>
                        <MdModeEdit size={25} color='#0d6efd' />
                    </LinkContainer>
                    <MdDelete style={{ cursor: 'pointer' }} size={25} color='#dc3545'
                        onClick={() => deleteMemory(memory._id)}
                    />
                </Card.Footer>
            </Card>
        </>
    )
}

export default Memory
