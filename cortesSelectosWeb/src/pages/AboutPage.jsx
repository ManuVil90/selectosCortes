import { Container, Row, Col } from "react-bootstrap";
import AboutimaUno from "../assets/img/carneUno.png"
import AboutimaDos from "../assets/img/carneUno.png"

const AboutPage = () => {
    return (

        <div className="aboutpage">
            <div className="aboutpagemv min-vh-100 d-flex align-items-center">
                <Container>
                    <Row className="about-box d-flex align-items-center">
                        <Col lg="6">
                            <h1 className="mb-4 text-center">Misión</h1>
                            <p className="mb-4">Somos la fuente confiable de carne fresca y calidad en Costa Rica. Nuestra misión es satisfacer a nuestros clientes mediante la entrega de productos cárnicos excepcionales, promoviendo al mismo tiempo la salud y el bienestar a través de una alimentación nutritiva y deliciosa en todo el país.</p>
                        </Col>
                        <Col lg="6" className="pt-lg-0 pt-5">
                            <img src={AboutimaUno} alt="hero-img " />
                        </Col>
                    </Row>
                    <Row className="about-box d-flex align-items-center">
                        <Col lg="6" className="pt-lg-0 pt-5">
                            <img src={AboutimaDos} alt="hero-img " />
                        </Col>
                        <Col lg="6">
                            <h1 className="mb-4 text-center">Vision</h1>
                            <p className="mb-4">Somos la fuente confiable de carne fresca y calidad en Costa Rica. Nuestra misión es satisfacer a nuestros clientes mediante la entrega de productos cárnicos excepcionales, promoviendo al mismo tiempo la salud y el bienestar a través de una alimentación nutritiva y deliciosa en todo el país.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
}
;

export default AboutPage;