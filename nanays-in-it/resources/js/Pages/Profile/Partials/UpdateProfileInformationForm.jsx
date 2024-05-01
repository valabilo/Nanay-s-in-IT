import { useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { Form, Toast, Row, Col, Alert } from 'react-bootstrap';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;
    const [isEditing, setIsEditing] = useState(false);
    const [show, setShow] = useState(true);
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        // Add placeholders for other fields
        username: user.username || '',
        birthdate: user.birthdate || '',
        age: user.age || '',
        gender: user.gender || '',
        role: user.role.role_name || '',
    });

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const setDataWithMerge = (field, value) => {
        setData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const submit = (e) => {
        e.preventDefault();
        patch(route('profile.update'));
        setIsEditing(false);
    };
    return (
        <section className='rounded-top'>
            <Form onSubmit={submit} className="ms-lg-2">

                <header className='mb-3'>
                    <div className='d-flex justify-content-between border-bottom border-danger mb-1'>
                        <h2 className="">
                            Profile Information
                        </h2>
                        <div className="d-flex flex-row-reverse align-items-center">
                            {isEditing ? (
                                <>
                                    <PrimaryButton variant="success" type="submit" disabled={processing}>Save</PrimaryButton>
                                    <PrimaryButton className='me-2' variant="danger" type="button" onClick={toggleEdit} >Cancel</PrimaryButton>
                                </>
                            ) : (
                                <PrimaryButton type="button" onClick={toggleEdit} >Edit</PrimaryButton>
                            )}
                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <Alert variant="success" className='me-3 p-1 m-0 text-body-tertiary'>
                                    Saved!
                                </Alert>
                            </Transition>
                        </div>
                    </div>
                    <div className="fw-lighter">
                        Update your account's profile information and email address.
                    </div>
                </header>
                <div className='ms-md-3'>
                    <Form.Group as={Row} className="mb-2 rounded-top">
                        <InputLabel column sm={2} className='fs-6 text-secondary' htmlFor="name" value="First Name:" />
                        <Col sm={5} className='d-flex align-items-center'>
                            {isEditing ? (
                                <TextInput
                                    id="first_name"
                                    value={data.first_name}
                                    onChange={(e) => setDataWithMerge('first_name', e.target.value)}
                                />
                            ) : (
                                <div className='fs-6'>{user.first_name}</div>
                            )}
                            <InputError className="mt-2" message={errors.first_name} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-2" >
                        <InputLabel column sm={2} className='fs-6 text-secondary' htmlFor="name" value="Last Name:" />
                        <Col sm={5} className='d-flex align-items-center'>
                            {isEditing ? (
                                <TextInput
                                    id="last_name"
                                    value={data.last_name}
                                    onChange={(e) => setDataWithMerge('last_name', e.target.value)}
                                />
                            ) : (
                                <div className='fs-6'>{user.last_name}</div>
                            )}
                            <InputError className="mt-2" message={errors.last_name} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-2">
                        <InputLabel column sm={2} className='fs-6 text-secondary' htmlFor="email" value="Email Address:" />
                        <Col sm={5} className='d-flex align-items-center'>
                            {isEditing ? (
                                <TextInput
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setDataWithMerge('email', e.target.value)}
                                />
                            ) : (
                                <div className='fs-6'>{user.email}</div>
                            )}
                            <InputError className="mt-2" message={errors.email} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-2">
                        <InputLabel column sm={2} className='fs-6 text-secondary' htmlFor="username" value="Username:" />
                        <Col sm={5} className='d-flex align-items-center'>
                            {isEditing ? (
                                <TextInput
                                    id="username"
                                    type="username"
                                    value={data.username}
                                    onChange={(e) => setDataWithMerge('username', e.target.value)}
                                />
                            ) : (
                                <div className='fs-6'>{user.username}</div>
                            )}
                            <InputError className="mt-2" message={errors.username} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-2">
                        <InputLabel column sm={2} className='fs-6 text-secondary' htmlFor="birthdate" value="Birthdate:" />
                        <Col sm={5} className='d-flex align-items-center'>
                            {isEditing ? (
                                <TextInput
                                    id="birthdate"
                                    value={data.birthdate}
                                    onChange={(e) => setDataWithMerge('birthdate', e.target.value)}
                                />
                            ) : (
                                <div>{user.birthdate}</div>
                            )}
                            <InputError className="mt-2" message={errors.birthdate} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-2">
                        <InputLabel column sm={2} className='fs-6 text-secondary' htmlFor="age" value="Age:" />
                        <Col sm={5} className='d-flex align-items-center'>
                            {isEditing ? (
                                <TextInput
                                    id="age"
                                    value={data.age}
                                    onChange={(e) => setDataWithMerge('age', e.target.value)}
                                />
                            ) : (
                                <div>{user.age}</div>
                            )}
                            <InputError className="mt-2" message={errors.age} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-2">
                        <InputLabel column sm={2} className='fs-6 text-secondary' htmlFor="gender" value="Gender:" />
                        <Col sm={5} className='d-flex align-items-center'>
                            {isEditing ? (
                                <Form.Select id="gender" value={data.gender} onChange={(e) => setDataWithMerge('gender', e.target.value)}>
                                    <option value="">Select Gender</option>
                                    <option value="Male" disabled={user.gender === "Male"}>Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </Form.Select>
                            ) : (
                                <div>{user.gender}</div>
                            )}
                            <InputError className="mt-2" message={errors.age} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-2">
                        <InputLabel column sm={2} className='fs-6 text-secondary' htmlFor="role" value="Role:" />
                        <Col sm={5} className='d-flex align-items-center'>
                            {isEditing ? (
                                <TextInput
                                    id="role"
                                    placeholder={user.role.role_name}
                                    value={data.role_name}
                                    onChange={(e) => setDataWithMerge('role_name', e.target.value)}
                                    disabled
                                />
                            ) : (
                                <div>
                                    {user.role.role_name}
                                </div>
                            )}
                        </Col>
                    </Form.Group>
                    {
                        mustVerifyEmail && user.email_verified_at === null && (
                            <div>
                                <Col className="text-sm mt-2 text-gray-800">
                                    Your email address is unverified.
                                    <Link
                                        href={route('verification.send')}
                                        method="post"
                                        as="button"
                                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Click here to re-send the verification email.
                                    </Link>
                                </Col>

                                {status === 'verification-link-sent' && (
                                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                        <Toast.Body>A new verification link has been sent to your email address.</Toast.Body>
                                    </Toast>
                                )}
                            </div>
                        )
                    }
                </div>
            </Form >
        </section >
    );
}
