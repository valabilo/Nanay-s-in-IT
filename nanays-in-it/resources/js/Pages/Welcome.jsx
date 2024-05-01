// Welcome.jsx
import { Head } from '@inertiajs/react';
import { Container } from "react-bootstrap";
import HomeCarousel from '@/Layouts/HomeContentLayout/HomeCarousel';
import AboutPage from '@/Layouts/HomeContentLayout/AboutPage';
import AboutFeatures from '@/Layouts/HomeContentLayout/AboutFeatures';
import GradPics from '@/Layouts/HomeContentLayout/GradPics';
import ProgramLayout from '@/Layouts/HomeContentLayout/ProgramsLayout';
import HighlightLayout from '@/Layouts/HomeContentLayout/HighLightLayout';
import TestimonySlider from '@/Layouts/HomeContentLayout/TestimonyLayout';
import Partner from '@/Layouts/HomeContentLayout/PartnersLayout';
import HomeLayout from "@/Layouts/HomeLayout";

const Welcome = ({ auth }) => {
    return (
        <>
            <Head title="Welcome" />
            <Container fluid className="px-0">
                <HomeCarousel />
                <AboutPage id="about" />
                <Container fluid className="bg-primary text-light">
                    <AboutFeatures className="feature-text my-5" />
                </Container>
                <GradPics className="my-5 p-lg-5 p-2" />
                <Container fluid className="pl-bg px-lg-5 px-0">
                    <ProgramLayout className="" />
                </Container>
                <Container fluid className="hlight-bg">
                    <HighlightLayout />
                </Container>
                <Container fluid className="bg-body-tertiary">
                    <TestimonySlider className="px-lg-5" />
                </Container>
                <Container fluid className="bg-body-tertiary py-5">
                    <Partner />
                </Container>
            </Container>
        </>
    );
};

Welcome.layout = page => <HomeLayout children={page} />;

export default Welcome;



