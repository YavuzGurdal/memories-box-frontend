import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap' // bu neyi sariyorsa ona basinca belirttigimiz linke gidiyor

import { useLocation } from 'react-router';
import { useNavigate } from 'react-router'; // ana sayfaya donmesi icin

import { FiEdit } from 'react-icons/fi';
import { FiLogIn, FiLogOut } from 'react-icons/fi';

import { logOut } from '../actions/userActions';


const Header = () => {
    const navigate = useNavigate(); // ana sayfaya donmesi icin

    const dispatch = useDispatch()
    const location = useLocation() // url'i takip ediyor
    const [user, setUser] = useState()

    const exit = async (id) => {
        await dispatch(logOut(id))
        setUser(null)
        navigate('/') // ana sayfaya donmesi icin
    }

    useEffect(() => { // user state'i bossa ve localstorage'de user varsa localstorage'den user'i alip stateteki user'a atiyor
        if (localStorage.getItem('user') && !user) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, [location, user])

    return (
        // collapseOnSelect bunu yazinca hamburger menu de herhangi bir seye tiklayinca eski haline geliyor. yani hamburger menu kapaniyor
        <header>
            <Navbar bg="light" variant='light' expand="lg" collapseOnSelect>
                <Container fluid>
                    <LinkContainer to='/'>
                        <Navbar.Brand href="#">Memories Box</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='justify-content-end' >
                        <Nav
                        // className="me-auto my-2 my-lg-0"
                        // style={{ maxHeight: '100px' }}
                        // navbarScroll
                        >
                            {
                                user ?
                                    (
                                        <>
                                            <LinkContainer to='/create' >
                                                <Nav.Link>
                                                    <Button variant='outline-info' ><FiEdit size={20} />&nbsp; Share Memory</Button>
                                                </Nav.Link>
                                            </LinkContainer>

                                            <Nav.Link>
                                                <Button
                                                    onClick={(e) => {
                                                        exit(user.user._id) // burda fonksiyorun cagirip id'yi parametre olarak gonderiyorum
                                                    }}
                                                    variant='outline-danger'
                                                >
                                                    <FiLogOut size={20} />&nbsp; Logout
                                                </Button>
                                            </Nav.Link>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <LinkContainer to='/auth' >
                                                <Nav.Link>
                                                    <Button variant='outline-info' ><FiLogIn size={20} />&nbsp; Login</Button>
                                                </Nav.Link>
                                            </LinkContainer>
                                        </>
                                    )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
