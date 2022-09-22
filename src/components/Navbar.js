import "../App.css";
import React from 'react'
import { Link } from 'react-scroll'
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/initials.png"

const NavBar = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <img 
                    src = {logo}
                    width = "40"
                    height = "40"
                    /> 
                </Navbar.Brand>

                <Nav.Item>
                    
                </Nav.Item>

            </Container>
        </Navbar>
    )
}
export default NavBar;