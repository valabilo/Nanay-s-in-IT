import FeatureCard from "@/Components/FeatureCard";
import { Container } from "react-bootstrap"
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonyCard from "@/Components/TestimonyCard";
import ContentHeader from "@/Components/ContentHeader";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const sliderContents = [
    //First image url
    {
        name:
            "Jamie Fel Tadeo",
        location:
            "Caloocan",
        message:
            "I'm really, thankful to the mentors that have the courage to teach us, thankful to Accenture with their partners PBSP and YMCA ffor this program that gives hope to all the Nanay's seeking for a better future ahead. This program is a great start for a better future with the best workplace in Asis, Accenture.",
        batch:
            "Batch 2"
    },
    {
        name:
            "Heizel Torio",
        location:
            "Pangasinan",
        message:
            "I started no knowing how to open a computer. At first, I thought I couldn't do it and I almost backed out, but I trusted myself with the help of my friends and mentors, it's true that you won't know you can do it if you don't try. There are also topics you don't know the answer too, but you can solve it because of Google, Youtube and to those who are with you in the program. ",
        batch:
            "Batch 1, July 2022"
    },
    //Second image url
    {
        name:
            "Stephanie Yabut",
        location:
            "Quezon Province",
        message:
            "When I become a full time mom I really forget all that I have learned in IT back in college but when I entered in this prigram I've learn a lot about IT that I can apply in my future job, and this is the way to help mu family need everday.",
        batch:
            "Batch 2, September 2023"
    },
    //Third image url
    {
        name:
            "Jamie Fel Tadeo",
        location:
            "Caloocan",
        message:
            "I'm really, thankful to the mentors that have the courage to teach us, thankful to Accenture with their partners PBSP and YMCA ffor this program that gives hope to all the Nanay's seeking for a better future ahead.",
        batch:
            "Batch 2, September 2023"
    },

    //Fourth image url

    {
        name:
            "Mary Grace San Ramon",
        location:
            "Manila",
        message:
            "This experience was ine of a kind! It is now easy but in every task that I solve, it has a feeling of satisfaction and fulfillment in myself. If we can do it, you can do it also! Always think that in every success, your family is with you. Thank you so much Nanay's in IT!",
        batch:
            "Batch 2, September 2023"

    }
];
const TestimonySlider = ({ className }) => {
    return (
        <Container className={`parent pb-5 ${className}`}>
            <ContentHeader className="text-center py-5" header="What Our Graduates are Saying" />
            <Carousel
                className="pb-5"
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={true}
                showDots={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >
                {sliderContents.map((content, index) => {
                    return (
                        <TestimonyCard key={index} name={content.name} content={content.message} batch={content.batch} location={content.location} className="custom-feature-card gap-3 shadow-sm h-100 text-bg-tertiary pb-3 ${className}" />
                    );
                })}
            </Carousel>
        </Container >
    );
};
export default TestimonySlider;
