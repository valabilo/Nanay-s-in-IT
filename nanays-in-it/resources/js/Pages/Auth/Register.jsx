import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import PasswordInput from '@/Components/PasswordInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { Form, Container, Row, Col, Button, InputGroup } from 'react-bootstrap';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        birthdate: '',
        age: '',
        gender: '',
        role_id: '',
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
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'))
    };
    return (
        <GuestLayout>
            <Head title="Register" />
            <Container fluid className='px-0'>
                <Row className='login-container align-content-center mx-0'>
                    <Col md={{ span: 6, offset: 1 }} xs={{ span: 10, offset: 1 }} className='bg-light border border-success border-opacity-25 shadow-lg rounded p-lg-5 p-3'>
                        <h3 className='text-center mb-3'>Register</h3>
                        <Form onSubmit={submit}>
                            <Row className='mb-3'>
                                <Form.Group as={Col}>
                                    <InputLabel className="fs-6" htmlFor="first_name" value="First Name" />
                                    <TextInput
                                        id="first_name"
                                        name="first_name"
                                        value={data.first_name}
                                        autoComplete="given-name"
                                        placeholder="First name"
                                        onChange={(e) => setData('first_name', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.first_name} className="mt-2" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <InputLabel className="fs-6" htmlFor="last_name" value="Last Name" />
                                    <TextInput
                                        id="last_name"
                                        name="last_name"
                                        value={data.last_name}
                                        autoComplete="family-name"
                                        placeholder="Last name"
                                        onChange={(e) => setData('last_name', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.last_name} className="mt-2" />
                                </Form.Group>
                            </Row>
                            <Row className='mb-3'>
                                <Form.Group as={Col} md={{ span: 4 }}>
                                    <InputLabel className="fs-6" htmlFor="username" value="Username" />
                                    <TextInput
                                        id="username"
                                        name="username"
                                        value={data.username}
                                        autoComplete="username"
                                        placeholder="Username"
                                        onChange={(e) => setData('username', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.username} className="mt-2" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <InputLabel className="fs-6" htmlFor="email" value="Email" />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        autoComplete="email"
                                        placeholder="Email"
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </Form.Group>
                            </Row>
                            <Row className='mb-3'>
                                <Col>
                                    <InputLabel className="fs-6" htmlFor="password" value="Password" />
                                    <InputGroup>
                                        <PasswordInput
                                            id="password"
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            value={data.password}
                                            placeholder="Password"
                                            autoComplete="new-password"
                                            onChange={(e) => setData('password', e.target.value)}
                                            required
                                        />
                                        <InputGroup.Text>
                                            <Button variant='btn-link' className='btn-link text-decoration-none p-0 fs-6' onClick={handleShowPassword}>
                                                {showPassword ? <i class="bi bi-eye-fill"></i> : <i class="bi bi-eye"></i>}
                                            </Button>
                                        </InputGroup.Text>
                                        <InputError message={errors.password} className="fs-6" />
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <InputLabel className="fs-6" htmlFor="password_confirmation" value="Confirm Password" />
                                    <InputGroup>
                                        <PasswordInput
                                            className="sm"
                                            type={showPassword ? 'text' : 'password'}
                                            id="password_confirmation"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            placeholder="Confirm Password"
                                            autoComplete="new-password"
                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                            required
                                        />
                                        <InputGroup.Text>
                                            <Button variant='btn-link' className='btn-link text-decoration-none p-0 fs-6' onClick={handleShowPassword}>
                                                {showPassword ? <i class="bi bi-eye-fill"></i> : <i class="bi bi-eye"></i>}
                                            </Button>
                                        </InputGroup.Text>
                                        <InputError message={errors.password_confirmation} />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Form.Group as={Col} >
                                    <InputLabel className="fs-6" htmlFor="birthdate" value="Birthdate" />
                                    <TextInput
                                        id="birthdate"
                                        type="date"
                                        name="birthdate"
                                        value={data.birthdate}
                                        onChange={(e) => setData('birthdate', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.birthdate} className="mt-2" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <InputLabel className="fs-6" htmlFor="age" value="Age" />
                                    <TextInput
                                        id="age"
                                        type="number"
                                        name="age"
                                        value={data.age}
                                        onChange={(e) => setData('age', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.age} className="mt-2" />
                                </Form.Group>
                            </Row>
                            <Row className='mb-3'>
                                <Form.Group as={Col} >
                                    <InputLabel className="fs-6" htmlFor="gender" value="Gender" />
                                    <Form.Select
                                        id="gender"
                                        name="gender"
                                        value={data.gender}
                                        onChange={(e) => setData('gender', e.target.value)}
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </Form.Select>
                                    <InputError message={errors.gender} className="mt-2" />
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <InputLabel className="fs-6" htmlFor="role_id" value="Role" />
                                    <Form.Select
                                        id="role_id"
                                        name="role_id"
                                        value={data.role_id}
                                        onChange={(e) => setData('role_id', e.target.value)}
                                        required
                                    >
                                        <option value="">Select Role</option>
                                        <option value="2">Instructor</option>
                                        <option value="3">Facilitator</option>
                                        <option value="4">Learner</option>
                                    </Form.Select>
                                    <InputError message={errors.role_id} className="mt-2" />
                                </Form.Group>
                            </Row>
                            <Form.Group className="d-flex justify-content-between align-items-center">
                                <Link
                                    href={route('login')}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Already registered?
                                </Link>
                                <PrimaryButton className="w-lg-25" disabled={processing}>
                                    Register
                                </PrimaryButton>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </GuestLayout>
    );
}
