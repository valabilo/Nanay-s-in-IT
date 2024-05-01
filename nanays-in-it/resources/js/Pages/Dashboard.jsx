import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ThemeChanger from '@/Layouts/ThemeChanger';

export default function Dashboard() {
    return (
        <ThemeChanger>
            <Head title="Dashboard" />
            Dashboard
        </ThemeChanger>
    );
}
Dashboard.layout = page => <AuthenticatedLayout children={page} />;