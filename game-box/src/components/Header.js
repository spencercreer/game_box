import { Navbar, Nav, Image } from 'react-bootstrap'

import logo from '../assets/logo310.png'

const { Brand, Toggle, Collapse } = Navbar
const { Link } = Nav

const Header = ({ setCurrentPage }) => {

    return (
        <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
            <div style={{ marginLeft: '15px' }}>
                <Brand href="#home" style={{ fontSize: '35px', height: '20px' }}>
                    <Image src={logo} style={{ borderRadius: '2px', width: '35px', marginRight: '10px' }} />
                    Game Box
                </Brand>
            </div>
            <Toggle aria-controls="responsive-navbar-nav" />
            <Collapse id="responsive-navbar-nav" className="mx-3">
                <Nav className="me-auto">
                    <Link onClick={() => setCurrentPage('dice')}>Dice</Link>
                    <Link onClick={() => setCurrentPage('scorecard')}>Scorecard</Link>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header