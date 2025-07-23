import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary position-sticky top-0 z-1" >
                <Container>
                    <Navbar.Brand href="#home">Rick & Morty </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to='/' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                            <NavLink to='/favorites' className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Favorites</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Menu; 