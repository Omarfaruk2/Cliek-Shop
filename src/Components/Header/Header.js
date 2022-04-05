import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='fw-bold' href="/home">Choose Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto header'>
                            <Link to="/">HOME</Link>
                            <Link to="/reviews">REVIEWS</Link>
                            <Link to="/dashboard">DASHBOARD</Link>
                            <Link to="/blogs">BLOGS</Link>
                            <Link to="/About">ABOUT</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>











        // <div className='w-100'>
        //     <Navbar bg="dark" variant="dark">
        //         <Nav className="mx-auto header">
        //             <Link to="/">HOME</Link>
        //             <Link to="/reviews">REVIEWS</Link>
        //             <Link to="/dashboard">DASHBOARD</Link>
        //             <Link to="/blogs">BLOGS</Link>
        //             <Link to="/About">ABOUT</Link>
        //         </Nav>

        //     </Navbar>
        // </div>
    )
}

export default Header