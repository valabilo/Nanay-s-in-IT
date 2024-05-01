import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";

const Partners = () => {
    return (
        <>
            <Head title="Partners" />
            Partners
        </>
    )
}
Partners.layout = page => <HomeLayout children={page} />;

export default Partners