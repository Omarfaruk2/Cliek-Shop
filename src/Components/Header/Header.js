import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <div className='w-100'>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="mx-auto header">
                        <Link to="/">HOME</Link>
                        <Link to="/reviews">REVIEWS</Link>
                        <Link to="/dashboard">DASHBOARD</Link>
                        <Link to="/blogs">BLOGS</Link>
                        <Link to="/About">ABOUT</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header