import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CreateFAQForm from './Partials/CreateFAQForm';
import EditFAQForm from './Partials/EditFAQform';
import { Container, Row, Col } from 'react-bootstrap';

export default function FAQList({ faqs, successMessage }) {
    return (
        <>
            <Container fluid className='px-0'>
                <Row>
                    <Col lg={4} sm={12}>
                        <div className='mb-3 shadow-sm rounded p-3 bg-body-tertiary border border-light-subtle border-opacity-10'>

                            <CreateFAQForm />

                        </div>
                    </Col>
                    <Col lg={8} sm={12}>
                        <div className='mb-3 shadow-sm rounded p-3 bg-body-tertiary border border-light-subtle border-opacity-10'>
                            <EditFAQForm faqs={faqs} successMessage={successMessage} />
                        </div>
                    </Col>
                </Row>


            </Container>
        </>
    );
};
FAQList.layout = page => <AuthenticatedLayout children={page} />
