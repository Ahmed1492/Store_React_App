import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.scss';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className='containerNavBar '>
            <Navbar expand="lg" >
                <Container className='justify-content-between w-100 align-items-center'>
                    <div>
                        <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    </div>

                    <div className='d-flex gap-4'>

                        <Navbar.Toggle className='bg-white h-25' aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="gap-5">
                                <Link to='/' >Home</Link>
                                <Link >About</Link>
                                <Link >Product</Link>
                                <Link >Contact</Link>
                                <Link >Link</Link>
                            </Nav>
                        </Navbar.Collapse>

                    </div>

                    <div className='mt-3'>
                        <h5>Nead A help</h5>
                        <p>1325523353</p>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};
