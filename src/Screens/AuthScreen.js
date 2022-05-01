import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'; // ana sayfaya donmesi icin
import Message from '../components/Message'

import { useDispatch, useSelector } from 'react-redux' // useSelector ile butun global state'lere ulasabilirim
import { signup } from '../actions/userActions'

const AuthScreen = () => { // bu Route'dan propsla geliyor.
    const navigate = useNavigate(); // ana sayfaya donmesi icin

    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const userState = useSelector((state) => state.user)
    const { error } = userState // error varsa direk bu sekilde aliyorum

    const [form, setForm] = useState(initialFormData)
    const [login, setLogin] = useState(true)

    const dispatch = useDispatch()

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    {
                        login ?
                            (
                                <Form className='align-content-center mt-3'>
                                    <h1 className='text-center mb-3 text-capitalize'>Log In</h1>

                                    <Form.Group className='mb-3'>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type='email'
                                            placeholder='Enter your E-mail address'
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className='mb-3'>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type='password'
                                            placeholder='Enter Password'
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Button style={{ letterSpacing: '1.5px' }} type='submit' className='my-3 w-100' size="lg" >Submit</Button>

                                    <p className='text-center mb-3 fs-4' style={{ letterSpacing: '1.5px' }}>
                                        <Form.Text>
                                            Don't Have an Account?
                                            <span
                                                onClick={(e) => setLogin(!login)}
                                                style={{ color: '#0d6efd', cursor: 'pointer' }}
                                            > Sign Up
                                            </span>
                                        </Form.Text>
                                    </p>
                                </Form>
                            )
                            :
                            (
                                <Form
                                    onSubmit={(e) => {
                                        e.preventDefault()
                                        if (!login) {
                                            dispatch(signup(form, navigate))
                                            //navigate('/'); // ana sayfaya donmesi icin.
                                        }
                                    }}
                                    className='align-content-center mt-3'>
                                    <h1 className='text-center mb-3 text-capitalize'>Sign Up</h1>

                                    {error && <Message>{error}</Message>}

                                    <Form.Group style={{ display: 'flex' }} className='mb-3'>
                                        <Form.Control
                                            style={{ marginRight: '10px' }}
                                            type='text'
                                            placeholder='First Name'
                                            onChange={(e) => setForm({ ...form, firstName: e.target.value })} // form'u alip sadece icindeki firstname;i degistirmis oluyorum
                                        >
                                        </Form.Control>
                                        <Form.Control
                                            style={{ marginLeft: '10px' }}
                                            type='text'
                                            placeholder='Last Name'
                                            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className='mb-3'>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type='email'
                                            placeholder='Enter your E-mail address'
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className='mb-3'>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type='password'
                                            placeholder='Enter Password'
                                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className='mb-3'>
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control
                                            style={{ letterSpacing: '1.5px' }}
                                            type='password'
                                            placeholder='Confirm Password'
                                            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Button style={{ letterSpacing: '1.5px' }} type='submit' className='my-3 w-100' size="lg" >Submit</Button>

                                    <p className='text-center mb-3 fs-4' style={{ letterSpacing: '1.5px' }}>
                                        <Form.Text>
                                            Already Have an Account?
                                            <span
                                                onClick={(e) => setLogin(!login)}
                                                style={{ color: '#0d6efd', cursor: 'pointer' }}
                                            > Login
                                            </span>
                                        </Form.Text>
                                    </p>
                                </Form>
                            )
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default AuthScreen
