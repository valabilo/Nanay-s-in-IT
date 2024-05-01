import React, { useState, useEffect } from 'react';
import { Form, Button, ListGroup, Alert, Row, Col, ButtonGroup } from 'react-bootstrap';
import { Inertia } from '@inertiajs/inertia';
import FAQButton from './FAQButton';
import ContentHeader from '@/Components/ContentHeader';

const EditFAQ = ({ faqs, successMessage }) => {
    const [editMode, setEditMode] = useState(false);
    const [selectedFAQ, setSelectedFAQ] = useState(null);
    const [formData, setFormData] = useState({
        question: '',
        answer: '',
    });
    const [message, setMessage] = useState(successMessage);

    useEffect(() => {
        setMessage(successMessage);

        // Clear the message after a delay
        if (successMessage) {
            const timer = setTimeout(() => {
                setMessage('');
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    const handleEditClick = (faq) => {
        setSelectedFAQ(faq);
        setFormData({
            question: faq.question,
            answer: faq.answer,
        });
        setEditMode(true);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCancelEdit = () => {
        setSelectedFAQ(null);
        setEditMode(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Inertia.put(route('faqs.update', { faq: selectedFAQ.id }), formData);
        } catch (error) {
            console.error('Failed to update FAQ:', error);
            setMessage('Failed to update FAQ');
        }
    };

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this FAQ?')) {
            Inertia.delete(route('faqs.destroy', { faq: selectedFAQ.id }));
        }
    };

    return (
        <>
            <ContentHeader header="FAQs" className="mx-5 py-3 text-center" />
            {message && (
                <Alert className='' variant="success" onClose={() => setMessage('')} dismissible>
                    {message}
                </Alert>
            )}
            {editMode ? (
                <Form className='mx-5' onSubmit={handleSubmit}>
                    <Form.Group controlId="question">
                        <Form.Label>Question:</Form.Label>
                        <Form.Control
                            type="text"
                            name="question"
                            value={formData.question}
                            onChange={handleChange}
                            className='text-muted'
                        />
                    </Form.Group>
                    <Form.Group controlId="answer">
                        <Form.Label>Answer:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            name="answer"
                            value={formData.answer}
                            onChange={handleChange}
                            className='text-muted'
                        />
                    </Form.Group>
                    <div className='d-flex mt-3'>

                        <div className='ms-auto d-flex gap-3'>
                            <Button variant="primary" type="submit">
                                Update FAQ
                            </Button>
                            <Button variant="secondary" onClick={handleCancelEdit}>
                                Cancel
                            </Button>
                        </div>
                    </div>
                </Form>
            ) : (

                <ListGroup className='border border-light-subtle'>
                    {faqs.data.map((faq) => (
                        <ListGroup.Item
                            action
                            variant='tertiary'
                            key={faq.id}
                            onMouseEnter={() => setSelectedFAQ(faq)}
                            onMouseLeave={() => setSelectedFAQ(null)}
                        >
                            <div className="d-flex justify-content-between align-items-center">
                                <span className='h6'>{faq.question}</span>

                                {selectedFAQ === faq && (
                                    <ButtonGroup className='d-flex gap-3'>
                                        <FAQButton
                                            onClick={() => handleEditClick(faq)}
                                            className='p-0'
                                            icon={<i className="text-light-emphasis p-0 fw-light bi bi-pencil-square"></i>}
                                        />
                                        <FAQButton
                                            onClick={handleDelete}
                                            className='p-0'
                                            icon={<i className="text-danger-emphasis bi bi-trash3"></i>}
                                        />
                                    </ButtonGroup>
                                )}
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </>
    );
};

export default EditFAQ;
