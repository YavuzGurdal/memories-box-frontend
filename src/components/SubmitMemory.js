import { React, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import ReactFileBase64 from 'react-file-base64'
import { useNavigate } from 'react-router-dom'; // ana sayfaya donmesi icin

// redux dan once
//import * as api from '../axios/index.js' // axios icindeki index.js icindeki herseyi api olarak import ediyorum. lazim olani kullaniyorum

import { useDispatch } from 'react-redux';
import { createMemory } from '../actions/memoryActions.js';

const SubmitMemory = () => {
    const navigate = useNavigate(); // ana sayfaya donmesi icin
    const dispatch = useDispatch()

    const [memoryData, setMemoryData] = useState({
        title: '',
        content: '',
        creator: '',
        image: ''
    })

    return (
        <>
            <Form
                onSubmit={(e) => {
                    e.preventDefault()

                    dispatch(createMemory(memoryData)) // memoryData'yi createMemory'ye gonderiyoruz. islemler orda yapiliyor

                    navigate('/'); // ana sayfaya donmesi icin.

                    //redux dan once
                    // api.createMemory(memoryData) // axios icinde tanimladigim fonksiyona memoryData'yi gonderiyorum
                }}
                autoComplete='off'
            >
                <Form.Group>
                    <h1>Create a memory</h1>
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        name='title'
                        type='text'
                        onChange={(e) => setMemoryData({ ...memoryData, title: e.target.value })}
                    // ...memoryData yazip butun degerleri aliyorum. virgulden sonra degistirmek istedigim degeri degistiriyorum
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label>Author</Form.Label>
                    <Form.Control name='creator' type='text'
                        onChange={(e) => setMemoryData({ ...memoryData, creator: e.target.value })}
                    // ...memoryData yazip butun degerleri aliyorum. virgulden sonra degistirmek istedigim degeri degistiriyorum
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label>Memory</Form.Label>
                    <Form.Control name='content' type='text' as='textarea' rows='3'
                        onChange={(e) => setMemoryData({ ...memoryData, content: e.target.value })}
                    // ...memoryData yazip butun degerleri aliyorum. virgulden sonra degistirmek istedigim degeri degistiriyorum
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='mt-3' style={{ letterSpacing: '1.5px' }}>
                    <ReactFileBase64 type='file' multiple={false}
                        onDone={({ base64 }) => setMemoryData({ ...memoryData, image: base64 })}
                    // onDone ReactFileBase64'den gelen fonksiyon
                    />
                    {/* multiple={false} bu true olursa birden fazla resim secilebiliyor */}
                </Form.Group>
                <Button type='submit' className='mt-3 w-100' size="lg" style={{ letterSpacing: '1.5px' }} >Submit</Button>
            </Form>

        </>
    )
}

export default SubmitMemory
