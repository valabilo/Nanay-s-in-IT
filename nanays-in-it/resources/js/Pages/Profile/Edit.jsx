import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <>
            <Head title="Profile" />

            <div className="mb-3 shadow-sm rounded p-3 bg-body-tertiary border border-light-subtle border-opacity-10">
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    className="max-w-xl"
                />
            </div>

            <div className="mb-3 shadow-sm rounded p-3 bg-body-tertiary border border-light-subtle border-opacity-10">
                <UpdatePasswordForm className="max-w-xl" />
            </div>

            <div className="mb-3 shadow-sm rounded p-3 bg-body-tertiary border border-light-subtle border-opacity-10">
                <DeleteUserForm className="max-w-xl" />
            </div>
        </>

    );
};
Edit.layout = page => <AuthenticatedLayout children={page} />

