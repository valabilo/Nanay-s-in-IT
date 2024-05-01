import { Card } from "react-bootstrap";

const TestimonyCard = ({ name, content, location, batch, className }) => {
    return (
        <Card border="light" className={`testimony-card ${className}`}>
            <Card.Body className="px-4">
                <Card.Text className="feature-content">
                    {content}
                </Card.Text>
                <Card.Title className="h6">
                    {name}, <span className="fst-italic text-muted fw-lighter">{location}</span>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-secondary">{batch}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}
export default TestimonyCard;