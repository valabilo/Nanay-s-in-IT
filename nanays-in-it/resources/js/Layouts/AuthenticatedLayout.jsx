import { useState } from 'react';
import { Navbar, NavDropdown, Container, Nav, Collapse, Button, ListGroup, Form, Dropdown } from "react-bootstrap";
import ThemeChanger from './ThemeChanger';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Link } from '@inertiajs/inertia-react';
import DashboardSidebar from './DashboardSidebar/DashboardSidebar'
import LearnerSidebar from '@/Layouts/DashboardSidebar/LearnerSidebar';
import FacilitatorSidebar from './DashboardSidebar/FacilitatorSidebar';
import InstructorSidebar from './DashboardSidebar/InstructorSidebar';
import { usePage } from '@inertiajs/react';


export default function Authenticated({ user, children }) {
    const [openCollapse, setOpenCollapse] = useState({});
    const [activeMainButton, setActiveMainButton] = useState('false');
    const [activeCollapseButton, setActiveCollapseButton] = useState('');
    const { auth } = usePage().props

    const toggleCollapse = (collapseId) => {
        setOpenCollapse(prevState => ({
            ...Object.fromEntries(Object.keys(prevState).map(key => [key, key === collapseId ? !prevState[key] : false])),
            [collapseId]: !prevState[collapseId]
        }));
    };

    const handleMainButtonClick = (buttonId) => {
        if (!openCollapse[buttonId]) {
            setActiveMainButton(buttonId);
            setActiveCollapseButton('');
        } else {
            setActiveMainButton(activeMainButton === buttonId ? '' : buttonId);
        }
    };

    const handleCollapseButtonClick = (buttonId) => {
        setActiveCollapseButton(activeCollapseButton === buttonId ? '' : buttonId);
    };
    const initials = `${auth.user.first_name[0].toUpperCase()}${auth.user.last_name[0].toUpperCase()}`;
    const roleName = `${auth.user.role.role_name}`;
    const roleInitials = `${auth.user.role.role_name[0].toUpperCase()}`

    let SidebarComponent;
    switch (roleName) {
        case 'Admin':
            SidebarComponent = DashboardSidebar;
            break;
        case 'Learner':
            SidebarComponent = LearnerSidebar;
            break;
        case 'Facilitator':
            SidebarComponent = FacilitatorSidebar;
            break;
        case 'Instructor':
            SidebarComponent = InstructorSidebar;
            break;
    }


    return (
        <Container fluid>
            <div className="row flex-nowrap">
                <div className="side-bar col-auto px-0 px-lg-2 col-md-3 col-xl-2 bg-tertiary text-light shadow">
                    <div className="d-flex flex-column flex-shrink-0 px-lg-3 py-3 min-vh-100">
                        <div className="d-flex justify-content-center mb-3 text-success-emphasis">
                            <h3 className="d-lg-none">{roleInitials}</h3>
                            <h3 className="fw-bold d-none d-sm-inline">{roleName}</h3>
                        </div>
                        <SidebarComponent
                            openCollapse={openCollapse}
                            activeMainButton={activeMainButton}
                            setActiveMainButton={setActiveMainButton}
                            activeCollapseButton={activeCollapseButton}
                            toggleCollapse={toggleCollapse}
                            handleMainButtonClick={handleMainButtonClick}
                            handleCollapseButtonClick={handleCollapseButtonClick}
                        />
                        <hr className="me-lg-3 me-2" />
                        <NavDropdown title={<span className="bg-secondary text-light rounded-circle p-1 text-center fs-6" style={{ width: '33px', height: '33px', display: 'inline-block' }}>{initials}</span>} id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} href={route('profile.edit')} className='text-decoration-none'>Profile</NavDropdown.Item>

                            <NavDropdown.Item>
                                <Link method="POST" href={route('logout')} className='btn btn-link px-0 text-light-emphasis text-decoration-none'>Logout</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
                <div className="col p-0">
                    <Navbar className="navbar bg-info-subtle px-lg-3 px-0 nav-shadow" collapseOnSelect expand="lg" sticky="top">
                        <Container className="px-2 px-lg-4 align-content-center">
                            <Navbar.Brand className="fs-4 fw-bold" href={route('dashboard')} active={route().current('dashboard') ? 'true' : 'false'}>Nanay's in IT</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav" className='collapse'>
                                <Nav className="me-auto px-lg-3 p-lg-0 py-2">
                                    <Form className="d-flex gap-0">
                                        <Form.Control
                                            size='sm'
                                            type="search"
                                            placeholder="Search"
                                            className="me-2 sm"
                                            aria-label="Search"
                                        />
                                        <Button variant="success" className="sm">Search</Button>
                                    </Form>
                                </Nav>
                                <Nav>
                                    <i className="bi bi-bell-fill ms-auto fs-4 text-secondary-emphasis"></i>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <div className="content-wrapper p-3 bg-body-secondary">
                        <ThemeChanger>
                            <main className='rounded-top'>
                                {children}
                            </main>
                        </ThemeChanger>
                    </div>
                </div>
            </div >
        </Container >
    );
}
