import { useRef, useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { Toast, Form, Row, Col } from 'react-bootstrap';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();
    const [show, setShow] = useState(false);

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className="rounded-top">
            <Form onSubmit={updatePassword} className="ms-lg-2">
                <header className='mb-3'>
                    <h2 className='border-bottom border-danger mb-2'>Update Password</h2>
                    <div className="fw-lighter">
                        Ensure your account is using a long, random password to stay secure.
                    </div>
                </header>
                <Form.Group as={Row} className="mb-2 rounded-top">
                    <InputLabel column sm={2} className='fs-6 text-secondary' htmlFor="current_password" value="Current Password:" />
                    <Col sm={5}>
                        <TextInput
                            id="current_password"
                            ref={currentPasswordInput}
                            value={data.current_password}
                            onChange={(e) => setData('current_password', e.target.value)}
                            type="password"
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                        />
                    </Col>
                    <InputError message={errors.current_password} className="mt-2" />
                </Form.Group>

                <Form.Group as={Row} className="mb-2 rounded-top">
                    <InputLabel column sm={2} className='fs-6 text-secondary' htmlFor="password" value="New Password:" />
                    <Col sm={5}>
                        <TextInput
                            id="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            type="password"
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                        />
                    </Col>
                    <InputError message={errors.password} className="mt-2" />
                </Form.Group>

                <Form.Group as={Row} className="mb-2 rounded-top">
                    <InputLabel column sm={2} className='fs-6 text-secondary' htmlFor="password_confirmation" value="Confirm Password:" />
                    <Col sm={5}>
                        <TextInput
                            id="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            type="password"
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                        />
                    </Col>
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </Form.Group>
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide className="mt-2 font-medium text-sm text-green-600">
                            <Toast.Body>Successfully updated password!</Toast.Body>
                        </Toast>
                    </Transition>
                </div>
            </Form>
        </section >
    );
}
