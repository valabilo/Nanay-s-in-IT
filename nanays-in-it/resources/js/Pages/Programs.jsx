import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";


const Programs = () => {
    return (
        <>
            <Head title="Programs" />
            Programs
        </>
    )
}
Programs.layout = page => <HomeLayout children={page} />;

export default Programs