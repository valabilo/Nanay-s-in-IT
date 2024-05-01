import ContentHeader from "@/Components/ContentHeader";
import FeatureCard from "@/Components/FeatureCard";
import { Container, Row, Col } from "react-bootstrap";

const ProgramLayout = ({ className }) => {
    const pythonLogo = '/images/python-logo.webp';
    const powerBILogo = '/images/powerBI-logo.png';
    return (
        <Container fluid className="p-lg-5 p-3 ">
            <ContentHeader className="text-center py-5 text-light" header="NITP is a 6-month training program aiming to improve on:" />
            <Row xs={1} md={2} lg={3} className="g-lg-5 g-3 px-lg-5 mx-0 pb-xs-3">
                <Col>
                    <FeatureCard bg='success' icon={<i className="text-warning me-1 bi bi-recycle"></i>} title='Software Development Lifecycle' content='The Software Development Lifecycle (SDLC) is a systematic process for developing software applications. It encompasses several phases including planning, requirements gathering, design, implementation, testing, deployment, and maintenance. Understanding the SDLC helps in efficiently managing software projects and ensuring high-quality deliverables.' />
                </Col>
                <Col>
                    <FeatureCard bg='danger' icon={<i className="text-warning me-1 bi bi-database-fill"></i>} title='Database Basic Skills' content='Database basic skills cover fundamental concepts and techniques necessary for working with databases. This includes understanding relational database models, SQL (Structured Query Language) for data manipulation and retrieval, normalization principles, database design, and basic database administration tasks.' />
                </Col>
                <Col>
                    <FeatureCard bg='warning' icon={<i className=" me-1 bi bi-cloud"></i>} title='Cloud Concepts' content='Cloud concepts refer to the fundamental principles and technologies associated with cloud computing. This includes understanding different cloud service models (IaaS, PaaS, SaaS), cloud deployment models (public, private, hybrid), scalability, virtualization, and key cloud providers like AWS, Azure, and Google Cloud.' />
                </Col>
                <Col>
                    <FeatureCard bg='info' icon={<img src={powerBILogo} alt="powerBI" className="me-1" width='30px' />} title='Power BI' content='Power BI is a powerful business analytics tool developed by Microsoft. It enables users to visualize and share insights from data through interactive dashboards and reports. Key skills include data modeling, creating visualizations, using DAX (Data Analysis Expressions), and integrating data from various sources.' />
                </Col>
                <Col>
                    <FeatureCard bg='primary' icon={<img src={pythonLogo} alt="powerBI" className="python me-1" width='30px' />} title='Python/AI' content='Python is a popular programming language widely used in artificial intelligence (AI) and machine learning (ML) applications. Skills in Python for AI involve understanding core Python programming, libraries such as NumPy, Pandas, and TensorFlow for AI/ML tasks, and applying algorithms for tasks like natural language processing and image recognition.' />
                </Col>
                <Col>
                    <FeatureCard bg='light' icon={<i className="me-1 bi bi-code-square"></i>} title='Web Development (HTML, CSS, JS)' content='Web development entails creating websites and web applications. HTML (HyperText Markup Language), CSS (Cascading Style Sheets), and JavaScript (JS) form the core technologies of web development. HTML structures content, CSS styles it, and JavaScript adds interactivity. Understanding these languages is essential for building modern web applications.' />
                </Col>
            </Row>
        </Container >
    )
}
export default ProgramLayout;