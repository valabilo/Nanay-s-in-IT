import HighlightCard from "@/Components/HighlightsCard";
import { Container, Row, Col } from 'react-bootstrap'

const HighlightLayout = () => {
    return (
        <Container fluid className="px-lg-5 py-5 p-xs-0">
            <Row xs={1} md={2} lg={3} className="p-lg-5 g-5">
                <Col xs={1} className="d-flex justify-content-center">
                    <HighlightCard icon={<i className="fa-solid fa-calendar text-success-emphasis"></i>} content='Running 3rd Batch' className="fs-4" />
                </Col>
                <Col xs={1}>
                    <HighlightCard icon={<i className="fa-solid fa-hand-holding-heart text-success-emphasis"></i>} content='More than 120 Beneficiaries' className="fs-4" />
                </Col>
                <Col xs={1}>
                    <HighlightCard icon={<i className="fa-solid fa-people-group text-success-emphasis"></i>} content='Inclusive and Diverse' className="fs-4" />
                </Col>
                <Col xs={1}>
                    <HighlightCard icon={<i className="fa-solid fa-person-dress text-success-emphasis"></i>} content='Women' className="fs-4" />
                </Col>
                <Col xs={1}>
                    <HighlightCard icon={<i className="fa-solid fa-user-pen text-success-emphasis"></i>} content='Out of School Youth' className="fs-4" />
                </Col>
                <Col xs={1}>
                    <HighlightCard icon={<i className="fa-solid fa-microchip text-success-emphasis"></i>} content='I.T Background' className="fs-4" />
                </Col>
            </Row>
            <div className="my-5">
                <HighlightCard icon={<i className="fa-solid fa-computer text-bg-primary p-3 rounded-circle"></i>} content='NOW VIRTUAL' className="fs-2" />
            </div>

        </Container>
    )
}
export default HighlightLayout