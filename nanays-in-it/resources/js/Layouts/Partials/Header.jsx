import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import { InertiaLink } from '@inertiajs/inertia-react';
const Header = () => {
    const [activeLink, setActiveLink] = useState('');
    const { auth } = usePage().props
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark" className="shadow-lg">
            <Container className="px-lg-5 px-3 py-2">
                <Navbar.Brand className="fw-bold fs-4">
                    <ApplicationLogo width='40' height='40' className="h3 text-light text-decoration-none" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="ms-auto text-light fs-6 align-items-center gap-2 px-3">
                        <Link
                            className="nav-link me-auto"
                            style={{ color: activeLink === 'about' ? 'lightgrey' : 'white' }}
                            onClick={() => setActiveLink('about')}
                            href={route('about')}
                        >
                            About Us
                        </Link>
                        <Link
                            className="nav-link me-auto fira-sans-regular"
                            style={{ color: activeLink === 'programs' ? 'lightgrey' : 'white' }}
                            onClick={() => setActiveLink('programs')}
                            href={route('programs')}
                        >
                            Programs
                        </Link>
                        <Link
                            className="nav-link me-auto"
                            style={{ color: activeLink === 'partners' ? 'lightgrey' : 'white' }}
                            onClick={() => setActiveLink('partners')}
                            href={route('partner')}
                        >
                            Partners
                        </Link>
                        <Link
                            className="nav-link me-auto"
                            style={{ color: activeLink === 'faq' ? 'lightgrey' : 'white' }}
                            onClick={() => setActiveLink('faq')}
                            href={route('home-faqs')}
                        >
                            FAQs
                        </Link>
                        <Link
                            className="nav-link me-auto"
                            style={{ color: activeLink === 'board' ? 'lightgrey' : 'white' }}
                            onClick={() => setActiveLink('board')}
                            href={route('advisors')}
                        >
                            Board of Advisors
                        </Link>
                        {auth.user ? (
                            <Link
                                className="nav-link text-success-emphasis me-auto"
                                style={{ color: activeLink === 'account' ? 'lightgrey' : 'white' }}
                                onClick={() => setActiveLink('account')}
                                href={route('dashboard')} // Replace with your actual route for Dashboard
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <NavDropdown title={<i className="bi bi-person-circle fs-4 text-light"></i>} className="me-auto">
                                <NavDropdown.Item href={route('login')} className="text-decoration-none z-1">
                                    Login
                                </NavDropdown.Item>
                                <NavDropdown.Item href={route('register')} className="z-1 text-light-emphasis text-decoration-none">
                                    Register
                                </NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;
