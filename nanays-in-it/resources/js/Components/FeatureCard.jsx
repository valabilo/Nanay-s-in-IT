import { Card } from "react-bootstrap";

const FeatureCard = ({ title, content, icon, bg, className }) => {
    return (
        <Card text={bg === 'light' ? 'dark' : 'white'} bg={bg} className={`feature-card shadow-lg h-100 border-tertiary ${className}`}>
            <Card.Body>
                <Card.Title className="feature-item">
                    <span className="text-dark">{icon}</span> <span className="program-title">{title}</span>
                </Card.Title>
                <Card.Text className="feature-content px-3">
                    {content}
                </Card.Text>
            </Card.Body>
        </Card >
    )
}
export default FeatureCard;