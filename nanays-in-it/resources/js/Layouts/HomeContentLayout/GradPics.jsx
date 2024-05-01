import { Container, Image } from "react-bootstrap"
const GradPics = ({ className }) => {
    const gradpic = '/images/grad-1.png';
    return (
        <Container className={`${className}`} >
            <Image src={gradpic} alt="gradpic" className="gradpic img-fluid rounded-4 shadow" />
        </Container >
    )
}
export default GradPics