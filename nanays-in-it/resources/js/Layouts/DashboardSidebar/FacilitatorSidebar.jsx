import { Nav, ListGroup, Collapse, Button } from "react-bootstrap";

const FacilitatorSidebar = ({ openCollapse, activeMainButton, setActiveMainButton, activeCollapseButton, toggleCollapse, handleMainButtonClick, handleCollapseButtonClick }) => {
    return (
        <>
            <Nav fill variant="tabs" className="mb-auto border-0 flex-column mb-0 just align-content-stretch" id="menu">
                <Nav.Item>
                    <Nav.Link href="#1" className={`d-flex gap-1 justify-content-lg-start justify-content-center border-0 align-items-center btn px-0 align-middle ${activeMainButton === 'dashboard' ? 'active' : ''}`} onClick={() => handleMainButtonClick('dashboard')}>
                        <i className="fs-5 bi bi-file-earmark-code"></i> <span className={`ms-1 d-none d-sm-inline fw-bold fs-5`}>Facilitator</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { toggleCollapse('programs'); setActiveMainButton('programs') }}
                        href="#submenu1"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-programs"
                        aria-expanded={openCollapse['programs']}
                        aria-controls="collapse-programs"
                        className={`d-flex gap-1 justify-content-lg-start justify-content-center border-0 align-items-center btn px-0 align-middle ${activeMainButton === 'programs' ? 'active' : ''}`}>
                        <i className={`fs-5 bi-speedometer2 ${openCollapse['programs'] ? 'bi-chevron-down' : 'bi-chevron-right'}`}></i> <span className="ms-1 d-none d-sm-inline fw-bold fs-5">Programs</span>
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
                        <i className="fs-5 bi bi-people "></i>
                        <span className="ms-1 d-none d-sm-inline fw-bold fs-5">Users</span>
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
                        <i className="fs-5 bi bi-gear"></i> <span className={`ms-1 d-none d-sm-inline fw-bold fs-5`}>Components</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        href="#3"
                        className={`d-flex gap-1 justify-content-lg-start justify-content-center border-0 align-items-center btn px-0 align-middle ${activeMainButton === 'roles' ? 'active' : ''}`}
                        onClick={() => handleMainButtonClick('roles')}>
                        <i className="fs-5 bi bi-person-gear"></i> <span className={`ms-1 d-none d-sm-inline fw-bold fs-5`}>Roles</span>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default FacilitatorSidebar;