import { InertiaLink } from "@inertiajs/inertia-react";

export default function ApplicationLogo({ className, width, height }) {
    const appLogo = '/images/NIT-logo.jpg'
    return (
        <InertiaLink href="/" className="d-flex align-items-center text-decoration-none gap-2">
            <img
                width={width}
                height={height}
                className="logo-1"
                src={appLogo}
                alt="logo" />
            <div className={`${className} logo-font mb-0`}>
                Nanay's in I.T
            </div>
        </InertiaLink>
    );
}
