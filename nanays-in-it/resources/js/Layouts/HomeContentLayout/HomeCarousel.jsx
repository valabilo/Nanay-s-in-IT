import { Carousel, Container } from "react-bootstrap";

const HomeCarousel = () => {
    return (
        <Container fluid className="mb-5 px-0">
            <Carousel variant="dark" >
                <Carousel.Item className="">
                    <img id="img"
                        className="d-block w-100 "
                        src="https://www.tapscape.com/wp-content/uploads/2022/02/The-.png"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img id="img"
                        className="d-block w-100 "
                        src="https://www.tapscape.com/wp-content/uploads/2022/02/The-.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img id="img"
                        className="d-block w-100 "
                        src="https://www.tapscape.com/wp-content/uploads/2022/02/The-.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}
export default HomeCarousel;