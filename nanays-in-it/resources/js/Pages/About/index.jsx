import HomeLayout from "@/Layouts/HomeLayout"
import { Head } from "@inertiajs/react"

export default function About() {
    return (
        <>
            <Head title="About Us" />
            About
        </>
    )
}
About.layout = page => <HomeLayout children={page} />