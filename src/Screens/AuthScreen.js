import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const AuthScreen = () => {
    const [login, setLogin] = useState(true)

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    {
                        login ?
                            (
                                <Form className='align-content-center mt-3'>
                                    <h1 className='text-center mb-3 text-capitalize'>Log In</h1>

                                    <Form.Group className='mb-3' style={{ letterSpacing: '1px' }}>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type='email'
                                            placeholder='Enter your E-mail address'
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className='mb-3' style={{ letterSpacing: '1px' }}>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type='password'
                                            placeholder='Enter Password'
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Button style={{ letterSpacing: '1px' }} type='submit' className='my-3 w-100' size="lg" >Submit</Button>

                                    <p className='text-center mb-3 fs-4' style={{ letterSpacing: '1px' }}>
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
                                <Form className='align-content-center mt-3'>
                                    <h1 className='text-center mb-3 text-capitalize'>Sign Up</h1>

                                    <Form.Group style={{ display: 'flex', letterSpacing: '1px' }} className='mb-3'>
                                        <Form.Control
                                            style={{ marginRight: '10px' }}
                                            type='text'
                                            placeholder='Name'
                                        >
                                        </Form.Control>
                                        <Form.Control
                                            style={{ marginLeft: '10px' }}
                                            type='text'
                                            placeholder='Surname'
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className='mb-3' style={{ letterSpacing: '1px' }}>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type='email'
                                            placeholder='Enter your E-mail address'
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className='mb-3' style={{ letterSpacing: '1px' }}>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type='password'
                                            placeholder='Enter Password'
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className='mb-3' style={{ letterSpacing: '1px' }}>
                                        <Form.Label>Verify Password</Form.Label>
                                        <Form.Control
                                            type='password'
                                            placeholder='Verify Password'
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Button style={{ letterSpacing: '1px' }} type='submit' className='my-3 w-100' size="lg" >Submit</Button>

                                    <p className='text-center mb-3 fs-4' style={{ letterSpacing: '1px' }}>
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
