import { Container, Navbar, Nav } from 'react-bootstrap'

const { Link } = Nav

const Header = ({ setCurrentPage }) => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link onClick={() => setCurrentPage('dice')}>Dice</Link>
                    <Link onClick={() => setCurrentPage('scorecard')}>Scorecard</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header