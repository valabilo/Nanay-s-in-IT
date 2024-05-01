import { Container, Row, Col } from "react-bootstrap"
const AboutPage = ({ className, id }) => {
    return (
        <Container className="my-5 text-center" id={id} >
            <h2 className="logo-font text-primary-emphasis py-3 fw-bold">Nanay's in IT</h2>
            <div className="d-flex text-center justify-content-center">
                <h5 className="feature-content w-lg-50 w-75">
                    This initiative aims the development of job skills of various individuals from poverty-stricken communities to enable and allow them to be competitive and marketable in the IT industry.
                    <br />
                    Supported by the Accenture Skill to Succeed Program under the Corporate Social Responsibility
                </h5>
            </div>

        </Container >
    )
}
export default AboutPage;