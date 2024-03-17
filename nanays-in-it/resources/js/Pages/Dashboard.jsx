import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from "react";
import { Head } from '@inertiajs/react';
import ThemeChanger from '@/Layouts/ThemeChanger';
export default function Dashboard({ auth }) {

    return (

        <AuthenticatedLayout
            user={auth.user}
            header=
            {< h2 className="font-semibold text-xl text-gray-800 leading-tight" > Dashboard</h2 >}
        >
            <ThemeChanger>
                <Head title="Dashboard" />

            </ThemeChanger>
        </AuthenticatedLayout >

    );
}
