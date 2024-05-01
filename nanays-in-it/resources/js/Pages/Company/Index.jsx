import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CreateCompanyForm from './Partials/Create';
import EditCompany from './Partials/Edit';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { useEffect } from 'react';

export default function Company({ company, companies, successMessage }) {
    console.log(company)
    return (
        <>
            <Container fluid className='px-0'>
                <Row>
                    <Col lg={4} sm={12}>
                        <div className='mb-3 shadow-sm rounded p-3 bg-body-tertiary border border-light-subtle border-opacity-10'>

                            <CreateCompanyForm />

                        </div>
                    </Col>
                    <Col lg={8} sm={12}>
                        <div className='mb-3 shadow-sm rounded p-3 bg-body-tertiary border border-light-subtle border-opacity-10'>
                            <EditCompany company={company} companies={companies} successMessage={successMessage} />
                        </div>
                    </Col>
                </Row>


            </Container>
        </>
    );
};
Company.layout = page => <AuthenticatedLayout children={page} />
