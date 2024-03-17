import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { Container, Form, Row, Col, Alert } from 'react-bootstrap';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <Container>
                <Row className='login-container align-content-center mx-0'>
                    <Col lg={{ span: 6, offset: 1 }} xs={{ span: 10, offset: 1 }} className='form-bg bg-light border border-success border-opacity-25 shadow-lg rounded p-lg-5 p-3'>
                        {status && <Alert variant='success' className="mb-3 p-2">{status}</Alert>}
                        <Form onSubmit={submit}>
                            <div className='mb-3'>
                                <div className="fs-6 text-secondary">
                                    Forgot your password? No problem. Just let us know your email address and we will email you a password
                                    reset link that will allow you to choose a new one.
                                </div>
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className="mb-3" />
                            </div>


                            <div className="d-flex justify-content-between align-items-center">
                                <Link className='btn-link fs-6' variant='btn-link' href={route('login')}>
                                    <i className="bi bi-arrow-left-square me-1"></i>
                                    <span>Login</span>
                                </Link>

                                <PrimaryButton className="" disabled={processing}>
                                    Email Password Reset Link
                                </PrimaryButton>
                            </div>
                        </Form>
                    </Col>

                </Row>

            </Container>

        </GuestLayout>
    );
}
