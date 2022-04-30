import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap' // bu neyi sariyorsa ona basinca belirttigimiz linke gidiyor

import { FiEdit } from 'react-icons/fi';
import { FiLogIn } from 'react-icons/fi';

const Header = () => {
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
                            <LinkContainer to='/create' >
                                <Nav.Link>
                                    <Button variant='outline-info' ><FiEdit size={20} />&nbsp; Share Memory</Button>
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/auth' >
                                <Nav.Link>
                                    <Button variant='outline-info' ><FiLogIn size={20} />&nbsp; Login</Button>
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
