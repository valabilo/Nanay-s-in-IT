import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia';

const CreateFAQForm = () => {
    const [formData, setFormData] = useState({
        question: '',
        answer: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post(route('faqs.store'), formData)
            .then((response) => {
                setFormData({ question: '', answer: '' });
            })
            .catch((error) => {
                console.error('Failed to create FAQ:', error);
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="question">
                <Form.Label>Question</Form.Label>
                <Form.Control
                    type="text"
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="answer">
                <Form.Label>Answer</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={4}
                    name="answer"
                    value={formData.answer}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Button className='w-100 mt-3' variant="primary" type="submit">
                Create FAQ
            </Button>
        </Form>
    );
};

export default CreateFAQForm;
