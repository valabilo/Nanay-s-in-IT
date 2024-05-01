import ContentHeader from "@/Components/ContentHeader";
import CustomAccordion from "@/Components/CustomAccordion";
import HomeLayout from "@/Layouts/HomeLayout"
import { Head } from "@inertiajs/react";
import { Container, Row, Col } from "react-bootstrap";

export default function FAQs({ faqs }) {

    return (
        <Container fluid className="bg-body-tertiary px-0">
            <Head title="FAQs" />
            <ContentHeader className="text-center py-5 h2" header="Frequently Asked Questions" />
            <Container fluid>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }}>
                        <CustomAccordion faqs={faqs} className="mx-5 mb-5" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

FAQs.layout = page => <HomeLayout title="FAQs">{page}</HomeLayout>;
