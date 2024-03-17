import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Navbar, Container, Nav, Collapse, Button, ListGroup, Form, Dropdown } from "react-bootstrap";


export default function Authenticated({ user, header, children }) {

    const [openCollapse, setOpenCollapse] = useState({});
    const [activeMainButton, setActiveMainButton] = useState('false');
    const [activeCollapseButton, setActiveCollapseButton] = useState('');

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

    const initials = `${user.first_name[0].toUpperCase()}${user.last_name[0].toUpperCase()}`;

    const getRoleName = (role_id) => {
        switch (role_id) {
            case 1:
                return 'Admin';
            case 2:
                return 'Instructor';
            case 3:
                return 'Facilitator';
            case 4:
                return 'Learner';
            default:
                return '';
        }
    };

    const roleName = getRoleName(user.role_id);
    return (
        <Container fluid>
            <div className="row flex-nowrap">
                <div className="side-bar col-auto col-md-3 col-xl-2 bg-tertiary text-light shadow">
                    <div className="d-flex flex-column flex-shrink-0 ps-lg-3 py-3 min-vh-100">
                        <div className="d-flex justify-content-center mb-3 text-success-emphasis">
                            <h3 className="d-lg-none">A</h3>
                            <span className="fs-5 fw-bold d-none d-sm-inline">{roleName}</span>
                        </div>
                        <Nav fill variant="tabs" className="mb-auto border-0 flex-column mb-0 just align-content-stretch" id="menu">
                            <Nav.Item>
                                <Nav.Link href="#1" className={`d-flex gap-1 justify-content-lg-start justify-content-center border-0 align-items-center btn px-0 align-middle ${activeMainButton === 'dashboard' ? 'active' : ''}`} onClick={() => handleMainButtonClick('dashboard')}>
                                    <i className="fs-5 bi bi-file-earmark-code"></i> <span className={`ms-1 d-none d-sm-inline`}>Dashboard</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => { toggleCollapse('programs'); setActiveMainButton('programs') }} href="#submenu1" data-bs-toggle="collapse" data-bs-target="#collapse-programs" aria-expanded={openCollapse['programs']}
                                    aria-controls="collapse-programs"
                                    className={`d-flex gap-1 justify-content-lg-start justify-content-center border-0 align-items-center btn px-0 align-middle ${activeMainButton === 'programs' ? 'active' : ''}`}>
                                    <i className={`fs-5 bi-speedometer2 ${openCollapse['programs'] ? 'bi-chevron-down' : 'bi-chevron-right'}`}></i> <span className="ms-1 me-auto d-none d-sm-inline">Programs</span>
                                </Nav.Link>
                                <Collapse in={openCollapse['programs']}>
                                    <ListGroup variant="flush px-3">
                                        <ListGroup.Item
                                            className={`d-grid gap-2 p-0`}
                                        >
                                            <Button
                                                variant="flat"
                                                href="#"
                                                className={`btn ${activeCollapseButton === 'programs-1' ? 'active' : ''}`}
                                                onClick={() => handleCollapseButtonClick('programs-1')}
                                            >
                                                Web Dev
                                            </Button>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            className={`d-grid gap-2 p-0`}
                                        >
                                            <Button
                                                variant="flat"
                                                href="#"
                                                className={`btn ${activeCollapseButton === 'program-2' ? 'active' : ''}`}
                                                onClick={() => handleCollapseButtonClick('program-2')}
                                            >
                                                Python/AI
                                            </Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Collapse>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    onClick={() => { toggleCollapse('settings'); setActiveMainButton('settings') }}
                                    aria-controls="collapse-settings"
                                    aria-expanded={openCollapse['settings']}
                                    href="#submenu2"
                                    data-bs-toggle="collapse"
                                    className={`d-flex gap-1 justify-content-lg-start justify-content-center border-0 align-items-center btn px-0 align-middle ${activeMainButton === 'settings' ? 'active' : ''}`}>
                                    <i className="fs-5 bi bi-people"></i>
                                    <span className="ms-1 d-none d-sm-inline">Users</span>
                                </Nav.Link>
                                <Collapse in={openCollapse['settings']}>
                                    <ListGroup variant="flush px-3">
                                        <ListGroup.Item
                                            className={`d-grid gap-2 p-0`}
                                        >
                                            <Button
                                                variant="flat"
                                                href="#"
                                                className={`btn ${activeCollapseButton === 'settings-1' ? 'active' : ''}`}
                                                onClick={() => handleCollapseButtonClick('settings-1')}
                                            >
                                                Instructors
                                            </Button>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            className={`d-grid gap-2 p-0`}
                                        >
                                            <Button
                                                variant="flat"
                                                href="#"
                                                className={`btn ${activeCollapseButton === 'settings-2' ? 'active' : ''}`}
                                                onClick={() => handleCollapseButtonClick('settings-2')}
                                            >
                                                Facilitatiors
                                            </Button>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            className={`d-grid gap-2 p-0`}
                                        >
                                            <Button
                                                variant="flat"
                                                href="#"
                                                className={`btn ${activeCollapseButton === 'settings-3' ? 'active' : ''}`}
                                                onClick={() => handleCollapseButtonClick('settings-3')}
                                            >
                                                Learners
                                            </Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Collapse>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    href="#2"
                                    className={`d-flex gap-1 justify-content-lg-start justify-content-center border-0 align-items-center btn px-0 align-middle ${activeMainButton === 'components' ? 'active' : ''}`}
                                    onClick={() => handleMainButtonClick('components')}>
                                    <i className="fs-5 bi bi-gear"></i> <span className={`ms-1 d-none d-sm-inline`}>Components</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    href="#3"
                                    className={`d-flex gap-1 justify-content-lg-start justify-content-center border-0 align-items-center btn px-0 align-middle ${activeMainButton === 'roles' ? 'active' : ''}`}
                                    onClick={() => handleMainButtonClick('roles')}>
                                    <i className="fs-5 bi bi-person-gear"></i> <span className={`ms-1 d-none d-sm-inline`}>Roles</span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <hr className="me-lg-5 me-2" />
                        <Dropdown size="sm" className="justify-content-end" id="bd-mode-toggle">
                            <Dropdown.Toggle className="btn btn-bd-primary gap-1 p-1 dropdown-toggle d-flex align-items-center text-decoration-none"
                                id="bd-theme"
                                as={Button}
                                variant='link'
                                aria-expanded="false"
                                data-bs-toggle="dropdown">
                                <span className="bg-secondary text-light rounded-circle p-1 text-align-center fs-6" style={{ width: '33px', height: '33px', display: 'inline-block' }}>{initials}</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
                                <Dropdown.Item className=' p-0'>
                                    <Link href={route('profile.edit')} className='text-decoration-none'>Profile</Link></Dropdown.Item>
                                <Dropdown.Item className=' p-0'>
                                    <Link method='post' href={route('logout')} className='text-decoration-none'>Log Out</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="col p-0">
                    <Navbar className="navbar bg-tertiary px-lg-3 px-0 nav-shadow" collapseOnSelect expand="lg" sticky="top">
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
                    <div className="content-wrapper p-3">
                        <h3>Content area...</h3>
                        <main>
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </Container>
    );
}
