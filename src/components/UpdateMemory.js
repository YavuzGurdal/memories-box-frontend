import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import ReactFileBase64 from 'react-file-base64'
import { useNavigate } from 'react-router-dom'; // ana sayfaya donmesi icin

import { useDispatch } from 'react-redux';
import { updateMemory } from '../actions/memoryActions.js';

import { fetchMemory } from '../axios/index.js' // axios icindeki index.js icindeki herseyi api olarak import ediyorum. lazim olani kullaniyorum


const UpdateMemory = ({ id }) => {
    const navigate = useNavigate(); // ana sayfaya donmesi icin
    const dispatch = useDispatch()

    const [memoryData, setMemoryData] = useState({
        title: '',
        content: '',
        creator: '',
        image: ''
    })

    useEffect(() => { // burda update tusuna basinca id ile db den ilgili id nin diger bilgilerini cekiyorum ve memoryData'yi guncelliyorum
        const getMemory = async () => {
            const { data } = await fetchMemory(id) // response dan gelen data yi direk bu sekilde alabiliyorum
            setMemoryData(data)
        }

        getMemory()
    }, [id])

    return (
        <>
            <Form
                onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(updateMemory(id, memoryData))
                    navigate('/'); // ana sayfaya donmesi icin.

                    // reduxdan once
                    //updateMemory(id, memoryData) // axios icinde tanimladigim fonksiyona id'yi ve memoryData'yi gonderiyorum
                }}
                autoComplete='off'
            >
                <Form.Group>
                    <h1>Update memory</h1>
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        name='title'
                        type='text'
                        value={memoryData.title}
                        onChange={(e) => setMemoryData({ ...memoryData, title: e.target.value })}
                    // ...memoryData yazip butun degerleri aliyorum. virgulden sonra degistirmek istedigim degeri degistiriyorum
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label>Author</Form.Label>
                    <Form.Control name='creator' type='text'
                        value={memoryData.creator}
                        onChange={(e) => setMemoryData({ ...memoryData, creator: e.target.value })}
                    // ...memoryData yazip butun degerleri aliyorum. virgulden sonra degistirmek istedigim degeri degistiriyorum
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='mt-3'>
                    <Form.Label>Memory</Form.Label>
                    <Form.Control name='content' type='text' as='textarea' rows='3'
                        value={memoryData.content}
                        onChange={(e) => setMemoryData({ ...memoryData, content: e.target.value })}
                    // ...memoryData yazip butun degerleri aliyorum. virgulden sonra degistirmek istedigim degeri degistiriyorum
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='mt-3' style={{ letterSpacing: '1.5px' }}>
                    <ReactFileBase64 type='file' multiple={false}
                        value={memoryData.image}
                        onDone={({ base64 }) => setMemoryData({ ...memoryData, image: base64 })}
                    // onDone ReactFileBase64'den gelen fonksiyon
                    />
                    {/* multiple={false} bu true olursa birden fazla resim secilebiliyor */}
                </Form.Group>
                <Button type='submit' className='mt-3 w-100' size="lg" style={{ letterSpacing: '1.5px' }}>Submit</Button>
            </Form>

        </>
    )
}

export default UpdateMemory

