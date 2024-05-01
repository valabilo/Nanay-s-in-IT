import ContentHeader from '@/Components/ContentHeader';
import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import HomeLayout from '@/Layouts/HomeLayout';

const Advisor = ({ name, picture }) => (
    <Col md={4} className="mb-4">
        <div className="text-center">
            <Image src={picture} roundedCircle style={{ width: '150px', height: '150px' }} />
            <h4 className="mt-3">{name}</h4>
        </div>
    </Col>
);

const BoardOfAdvisors = () => {
    const advisors = [
        { name: 'Head Advisor', picture: '/path_to_head_picture.jpg' },
        { name: 'Advisor 1', picture: '/path_to_advisor1_picture.jpg' },
        { name: 'Advisor 2', picture: '/path_to_advisor2_picture.jpg' },
        { name: 'Advisor 3', picture: '/path_to_advisor3_picture.jpg' },
        // Add more advisors as needed
    ];

    return (
        <Container className="py-5">
            <ContentHeader header="Advisors" className="text-center py-5" />
            <Row className="mb-4">
                <Col>
                    <div className="text-center">
                        <Image src={advisors[0].picture} roundedCircle style={{ width: '200px', height: '200px' }} />
                        <h2 className="mt-3">{advisors[0].name}</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                {advisors.slice(1).map((advisor, index) => (
                    <Advisor key={index} name={advisor.name} picture={advisor.picture} />
                ))}
            </Row>
        </Container>
    );
};

export default BoardOfAdvisors;

BoardOfAdvisors.layout = page => <HomeLayout title="Board of Advisors" children={page} />;