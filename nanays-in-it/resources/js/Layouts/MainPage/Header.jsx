import { Nav, Navbar, NavLink, Container, Dropdown, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from '@inertiajs/react';

function Header({ auth }) {
    const [activeLink, setActiveLink] = useState(""); // State to manage active link

    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" className="bg-primary">
            <Container className="px-lg-5 px-3 py-2">
                <Navbar.Brand href="/" className="text-light fw-bold fs-4">
                    <img
                        alt="logo"
                        src="/logo.png"
                        width="40"
                        height="40"
                        className="d-inline-block"
                    />
                    Nanay's in IT
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="ms-auto text-light fw-bold fs-5 align-items-center gap-2 px-3">
                        <NavLink
                            exact="true"
                            className="nav-link ms-auto"
                            style={{ color: activeLink === "about" ? "lightgrey" : "white" }}
                            onClick={() => setActiveLink("about")}
                            href="#"
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            exact="true"
                            className="nav-link ms-auto fira-sans-regular"
                            style={{ color: activeLink === "programs" ? "lightgrey" : "white" }}
                            onClick={() => setActiveLink("programs")}
                            href="#"
                        >
                            Programs
                        </NavLink>
                        <NavLink
                            exact="true"
                            className="nav-link ms-auto"
                            style={{ color: activeLink === "partners" ? "lightgrey" : "white" }}
                            onClick={() => setActiveLink("partners")}
                            href="#"
                        >
                            Partners
                        </NavLink>
                        <NavLink
                            exact="true"
                            className="nav-link ms-auto"
                            style={{ color: activeLink === "faq" ? "lightgrey" : "white" }}
                            onClick={() => setActiveLink("faq")}
                            href="#"
                        >
                            FAQ
                        </NavLink>
                        <NavLink
                            exact="true"
                            className="nav-link ms-auto"
                            style={{ color: activeLink === "board" ? "lightgrey" : "white" }}
                            onClick={() => setActiveLink("board")}
                            href="#"
                        >
                            Board of Advisors
                        </NavLink>
                        {auth.user ? (
                            <Link
                                exact="true"
                                className="nav-link text-success-emphasis ms-auto"
                                style={{ color: activeLink === "account" ? "lightgrey" : "white" }}
                                onClick={() => setActiveLink("account")}
                                href={route('dashboard')}>
                                Dashboard
                            </Link>
                        ) : (
                            <Dropdown className="ms-auto" id="bd-mode-toggle">
                                <Dropdown.Toggle className="btn nav-link gap-1 py-3 dropdown-toggle d-flex align-items-center text-decoration-none"
                                    id="bd-theme"
                                    as={Button}
                                    variant='link'
                                    aria-expanded="false"
                                    data-bs-toggle="dropdown">
                                    <i className="bi bi-person-circle fs-4"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
                                    <Dropdown.Item>
                                        <Link href={route('register')} className='text-decoration-none'>Register</Link></Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link href={route('login')} className='text-decoration-none'>Log in</Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;
