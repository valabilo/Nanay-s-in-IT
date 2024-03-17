import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import { Col, Container, Form, Row, InputGroup, Button } from 'react-bootstrap';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(true);
        setTimeout(() => {
            setShowPassword(false);
        }, 2000);
    };
    const handleConfirmShowPassword = () => {
        setConfirmShowPassword(true);
        setTimeout(() => {
            setConfirmShowPassword(false)
        }, 2000);
    };

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'));
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />
            <Container>
                <Row className='login-container align-content-center mx-0'>
                    <Col lg={{ span: 6, offset: 1 }} xs={{ span: 10, offset: 1 }} className='form-bg bg-light border border-success border-opacity-25 shadow-lg rounded p-lg-5 p-3'>
                        <h3 className='mb-3'>Reset Password</h3>
                        <Form onSubmit={submit}>
                            <InputLabel htmlFor="email" value="Email" />
                            <InputGroup className='mb-3'>
                                <TextInput
                                    id="email"
                                    disabled
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                            </InputGroup>
                            <InputLabel htmlFor="password" value="Password" />
                            <InputGroup className="">
                                <TextInput
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={data.password}
                                    autoComplete="new-password"
                                    isFocused={true}
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <InputGroup.Text>
                                    <Button variant='btn-link' className='btn-link text-decoration-none p-0 fs-6' onClick={handleShowPassword}>
                                        {showPassword ? <i className="bi bi-eye-fill"></i> : <i class="bi bi-eye"></i>}
                                    </Button>
                                </InputGroup.Text>
                            </InputGroup>
                            <InputError message={errors.password} className="text-danger fs-6 mb-2" />
                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                            <InputGroup className="">
                                <TextInput
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                />
                                <InputGroup.Text>
                                    <Button variant='btn-link' className='btn-link text-decoration-none p-0 fs-6' onClick={handleConfirmShowPassword}>
                                        {showConfirmPassword ? <i className="bi bi-eye-fill"></i> : <i class="bi bi-eye"></i>}
                                    </Button>
                                </InputGroup.Text>
                            </InputGroup>
                            <InputError message={errors.password_confirmation} className="fs-6" />
                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton className="w-100" disabled={processing}>
                                    Reset Password
                                </PrimaryButton>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </GuestLayout>
    );
}
