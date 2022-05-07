import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'; // ana sayfaya donmesi icin
import Message from '../components/Message'

import { useDispatch, useSelector } from 'react-redux' // useSelector ile butun global state'lere ulasabilirim
import { signup, signin } from '../actions/userActions'

import { useLocation } from 'react-router';

const AuthScreen = () => { // bu Route'dan propsla geliyor.
    const navigate = useNavigate(); // ana sayfaya donmesi icin

    const location = useLocation() // url'i takip ediyor

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

    const locationChange = async () => { // dispatch ile type gonderiyorum. usersReducer'da case'i AUTH_LOCATION_CHANGE olan tetikleniyor. bu sekilde state'te degisiklik yapabiliyorum
        await dispatch({ type: 'AUTH_LOCATION_CHANGE' })
    }

    useEffect(() => {
        locationChange()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location, login])

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    {
                        login ?
                            (
                                <Form
                                    onSubmit={(e) => {
                                        e.preventDefault()
                                        if (login) {
                                            dispatch(signin(form, navigate))
                                            //navigate('/'); // ana sayfaya donmesi icin.
                                        }
                                    }}
                                    className='align-content-center mt-3'
                                >
                                    <h1 className='text-center mb-3 text-capitalize'>Sign In</h1>

                                    {error && <Message>{error}</Message>}

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
                                            > Sign In
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
