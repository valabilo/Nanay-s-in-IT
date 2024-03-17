import { Link, Head } from '@inertiajs/react';
import HomeLayout from '../Layouts/HomeLayout'
import ThemeChanger from '@/Layouts/ThemeChanger';

export default function Welcome({ auth }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <ThemeChanger>
            <Head title="Welcome" />
            <HomeLayout auth={auth} />
        </ThemeChanger>
    );
}
