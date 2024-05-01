import React, { useState, useEffect } from 'react';
import { Form, Button, ListGroup, Alert, ButtonGroup, Image } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import ContentHeader from '@/Components/ContentHeader';
import { router } from '@inertiajs/react';

export default function EditCompany({ company, companies, successMessage }) {
    const [editMode, setEditMode] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [message, setMessage] = useState(successMessage);
    const { data, setData, post, errors, reset } = useForm({
        name: company.name || '',
        description: company.description || '',
        goal: company.goal || '',
        logo: '',
    });


    useEffect(() => {
        setMessage(successMessage);
        if (successMessage) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    const handleEditClick = (company) => {
        setEditMode(true);
        setSelectedCompany(company);
        setData({
            name: company.name,
            description: company.description,
            goal: company.goal,
            logo: company.logo, // Assuming image_path is the URL to the logo
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("partner-company.update", company.id));
    };



    const handleDelete = () => {
        if (!window.confirm("Are you sure you want to delete the company?")) {
            return;
        }
        router.delete(route("partner-company.destroy", { company: selectedCompany.id }));
    };
    console.log(company)

    return (
        <>
            <ContentHeader header="Partner Companies" className="mx-5 py-3 text-center text-warning-emphasis" />
            {message && (
                <Alert variant="success" onClose={() => setMessage('')} dismissible>
                    {message}
                </Alert>
            )}
            {editMode ? (
                <Form className="mx-5" onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            placeholder="Enter company name"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.Label>Company's Description</Form.Label>
                        <Form.Control
                            type="text"
                            name="description" // Ensure this matches the field name in the request
                            value={data.description}
                            onChange={(e) => setData("description", e.target.value)}
                            placeholder="Enter company description"
                            className='mb-2'
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="name">
                        <Form.Label>Company's Goal</Form.Label>
                        <Form.Control
                            type="text"
                            name="goal" // Ensure this matches the field name in the request
                            value={data.goal}
                            onChange={(e) => setData("goal", e.target.value)}
                            placeholder="Enter company goal"
                            className='mb-2'
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="logo">
                        <Form.Label>Company Logo:</Form.Label>
                        <Form.Control
                            type="file"
                            name="logo"
                            onChange={(e) => setData({ ...data, logo: e.target.files[0] })}
                        />
                        {data.logo && (
                            <Image className="w-50 border" src={data.logo} alt="Company Logo" fluid />
                        )}
                    </Form.Group>


                    <div className="d-flex mt-3 justify-content-end gap-3">
                        <Button variant="primary" type="submit">
                            Update Company
                        </Button>
                        <Button variant="secondary" onClick={handleCancelEdit} className="ml-2">
                            Cancel
                        </Button>
                    </div>
                </Form>
            ) : (
                <ListGroup className="border border-light-subtle mx-5">
                    {companies.length === 0 ? (
                        <ListGroup.Item className="text-center">
                            <p>No Company Found</p>
                        </ListGroup.Item>
                    ) : (
                        companies.data.map((company) => (
                            <ListGroup.Item
                                key={company.id}
                                className="d-flex justify-content-between align-items-center"
                                onMouseEnter={() => setSelectedCompany(company)}
                                onMouseLeave={() => setSelectedCompany(null)}
                            >
                                <span className="h6">{company.name}</span>
                                {selectedCompany === company && (
                                    <ButtonGroup className="d-flex gap-3">
                                        <Button variant="link" onClick={() => handleEditClick(company)} className="p-0">
                                            <i className="text-light-emphasis p-0 fw-light bi bi-pencil-square"></i>
                                        </Button>
                                        <Button variant="link" onClick={handleDelete} className="p-0 text-danger">
                                            <i className="bi bi-trash"></i>
                                        </Button>
                                    </ButtonGroup>
                                )}
                            </ListGroup.Item>
                        ))
                    )}
                </ListGroup>
            )}
        </>
    );
}
