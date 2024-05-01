import { useEffect, useState } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import PasswordInput from '@/Components/PasswordInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Form, Row, Col, Container, InputGroup, Button, Alert } from 'react-bootstrap';
import { InertiaLink } from '@inertiajs/inertia-react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(true);
        setTimeout(() => {
            setShowPassword(false);
        }, 2000);
    };

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Container fluid className='px-0'>
                <Head title="Log in" />
                <Row className="login-container align-content-center mx-0">
                    <Col md={{ span: 4, offset: 2 }} xs={{ span: 10, offset: 1 }} className='bg-body-tertiary border border-success border-opacity-25 shadow-lg rounded p-lg-5 p-3'>
                        <div className='d-flex justify-content-center mb-3'>
                            <ApplicationLogo width="45" height="45" className="h3" />
                        </div>

                        {status && <Alert className="mb-4 font-medium text-sm text-green-600">{status}</Alert>}
                        <Form onSubmit={submit}>
                            <Form.Floating className="mb-3">
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className=""
                                    autoComplete="username"
                                    isfocused="true"
                                    placeholder="name@example.com"
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputLabel htmlFor="email">Email address</InputLabel>
                                <InputError message={errors.email} />
                            </Form.Floating>
                            <InputGroup className='mb-3'>
                                <Form.Floating>
                                    <PasswordInput
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        value={data.password}
                                        className=""
                                        autoComplete="current-password"
                                        placeholder="Enter your password"
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <InputError message={errors.password} className="mb-2" />
                                </Form.Floating>
                                <InputGroup.Text>
                                    <Button variant="btn-link" className='btn-link text-decoration-none p-0' onClick={handleShowPassword}>
                                        {showPassword ? 'Hide' : 'Show'}
                                    </Button>
                                </InputGroup.Text>
                            </InputGroup>

                            <Checkbox
                                name="remember"
                                id="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                label="Remember me"
                                className='mb-3'
                            />

                            {canResetPassword && (
                                <div className='mb-3'>
                                    <Link href={route('password.request')} className="btn-link">
                                        Forgot your password?
                                    </Link>
                                </div>

                            )}
                            <div className='mb-3'>
                                <PrimaryButton variant="primary" className='w-100' size="lg" disabled={processing}>
                                    Log in
                                </PrimaryButton>
                            </div>
                            <div className='d-flex'>
                                <div className='me-1'>
                                    Don't have an account
                                </div>
                                <Link href={route('register')} className="btn-link">
                                    Register
                                </Link>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </GuestLayout>
    );
}
