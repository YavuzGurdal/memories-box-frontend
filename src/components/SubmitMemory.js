import React from 'react'
import { Form, Button } from 'react-bootstrap'
import ReactFileBase64 from 'react-file-base64'


const SubmitMemory = () => {
    return (
        <>
            <Form>
                <Form.Group>
                    <h1>Create a memory</h1>
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control name='title' type='text' ></Form.Control>
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label>Author</Form.Label>
                    <Form.Control name='author' type='text' ></Form.Control>
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label>Memory</Form.Label>
                    <Form.Control name='content' type='text' as='textarea' rows='3'></Form.Control>
                </Form.Group>
                <Form.Group className='mt-3'>
                    <ReactFileBase64 type='file' multiple={false} onDone={() => { }} />
                    {/* multiple={false} bu true olursa birden fazla resim secilebiliyor */}
                </Form.Group>
                <Button type='submit' className='mt-3 w-100' size="lg" >Submit</Button>
            </Form>

        </>
    )
}

export default SubmitMemory
