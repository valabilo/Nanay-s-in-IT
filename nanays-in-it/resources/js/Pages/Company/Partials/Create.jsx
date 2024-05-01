import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ContentHeader from '@/Components/ContentHeader';
import { useForm } from '@inertiajs/inertia-react';

const CreateCompanyForm = () => {
    const { data, setData, post } = useForm({
        name: '',
        logo: '', // Use null to track file object
        description: '',
        goal: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        post(route("partner-company.store"));

    };

    return (
        <Container>
            <ContentHeader className="text-center h4 text-info-emphasis" header="Create New Company" />
            <Form onSubmit={handleSubmit} className=''>
                <Form.Group controlId="name">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        placeholder="Enter company name"
                        className='mb-2'
                        required
                    />
                </Form.Group>

                <Form.Group controlId="logo" className='mb-3'>
                    <Form.Label>Company Logo</Form.Label>
                    <Form.Control
                        type="file"
                        name="logo"
                        onChange={(e) => setData("logo", e.target.files[0])}
                        accept="image/*" // Allow only logo files
                        required
                    />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Company's About</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="description"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        placeholder="Enter description"
                        className='mb-2'
                        required
                    />
                </Form.Group>

                <Form.Group controlId="goal">
                    <Form.Label>Company's Goal</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="goal"
                        value={data.goal}
                        onChange={(e) => setData("goal", e.target.value)}
                        placeholder="Enter goal"
                        className='mb-2'
                        required
                    />
                </Form.Group>

                <Button className='w-100' variant="primary" type="submit">
                    Create Company
                </Button>
            </Form>
        </Container>
    );
};

CreateCompanyForm.layout = page => <AuthenticatedLayout children={page} />;

export default CreateCompanyForm;
