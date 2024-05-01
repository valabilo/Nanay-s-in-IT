import { Card } from "react-bootstrap";

const DashboardCard = ({ title, content }) => {
    return (
        <Card border="light" >
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default DashboardCard;