import {Link} from "react-router-dom"
import {Navbar, Container, Nav} from 'react-bootstrap'


function Menu(){
    return(
        <>
            <Navbar bg="success" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">RickandMorty</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/ingresar">Login</Nav.Link>
                        <Nav.Link as={Link} to="/alta">Registro</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        
        </>
       
    )
}
export default Menu