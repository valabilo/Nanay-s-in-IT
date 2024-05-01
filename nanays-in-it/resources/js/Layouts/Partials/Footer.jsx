import ApplicationLogo from "@/Components/ApplicationLogo";
import { Container } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="px-sm-2 px-lg-5 bg-primary">
            <Container className="d-flex flex-column">
                <div className="d-flex flex-lg-row flex-column gap-lg-0 gap-2 py-4 px-lg-5 px-2  justify-content-between">
                    {/* contacts */}
                    <div className="d-flex flex-column">
                        <h3>
                            Contacts
                        </h3>
                        <div>
                            sample
                        </div>
                        <div>
                            sample
                        </div>
                        <div>
                            sample
                        </div>
                        <div>
                            sample
                        </div>
                        <div>
                            sample
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div className="d-flex flex-column">
                        <h3>
                            Contacts
                        </h3>
                        <div>
                            sample
                        </div>
                        <div>
                            sample
                        </div>
                        <div>
                            sample
                        </div>
                        <div>
                            sample
                        </div>
                        <div>
                            sample
                        </div>
                    </div>
                    {/* More Links */}
                    <div className="d-flex flex-column">
                        <h3>
                            Contacts
                        </h3>
                        <div>
                            sample
                        </div>
                        <div>
                            sample
                        </div>
                        <div>
                            sample
                        </div>
                        <div>
                            sample
                        </div>
                        <div>
                            sample
                        </div>
                    </div>
                    {/* Follow Us */}
                    <div className="d-flex flex-column">
                        <h3>
                            Contacts
                        </h3>
                        <div>
                            sample
                        </div>
                        <div>
                            sample
                        </div>
                        <div>
                            sample
                        </div>
                        <div>
                            sample
                        </div>
                        <div>
                            sample
                        </div>
                    </div>
                </div>
                <hr className="mx-lg-5 my-2" />
                <div className="d-flex px-lg-5 px-2 py-2 align-items-center">
                    <div>
                        <ApplicationLogo width='25' height='25' className='h6 text-decoration-none text-light' />
                    </div>
                    <div className="terms d-flex ms-auto gap-2 text-danger">
                        <div>
                            Terms of Service
                        </div>
                        |
                        <div>
                            Privacy Policy
                        </div>
                    </div>

                </div>
            </Container>

        </footer>
    )
}