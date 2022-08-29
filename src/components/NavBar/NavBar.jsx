import { Button, Container } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom/'
import useToken from "../../hooks/useToken.js";
import MenuWidget from "../MenuWidget/MenuWidget.jsx";
const NavBar = () => {
    const { deleteToken } = useToken();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" style={{ 'backgroundColor': '#009443' }}>
                <Container>
                    <MenuWidget  />
                    <Navbar.Brand as={NavLink} to='/'>Spoonacular</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className='nav-link' to='/'>Home</NavLink>
                            <NavLink className='nav-link' to='/search'>Search</NavLink>
                        </Nav>
                        <Nav className="me-end">
                            <Button className="btn btn-success btn-outline-light" onClick={() => { deleteToken(); window.location.reload() }}> Logout</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar