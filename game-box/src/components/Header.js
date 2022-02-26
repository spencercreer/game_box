import { Container, Navbar, Nav } from 'react-bootstrap'

const { Link } = Nav

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link href="#home">Home</Link>
                    <Link href="#features">Features</Link>
                    <Link href="#pricing">Pricing</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header