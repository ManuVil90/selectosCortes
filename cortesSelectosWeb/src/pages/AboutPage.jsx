import { Container, Row, Col } from "react-bootstrap";

import imgVentisiete from "../assets/img/products/imgAbout-1.png";
import imgVentiocho from "../assets/img/products/imgAbout-2.jpg";


const AboutPage = () => {
    return (

        <div className="aboutpage">
            <div className="aboutpagemv min-vh-100 d-flex align-items-center">
                <Container>
                    <Row className="about-box d-flex align-items-center">
                        <Col lg="6">
                            <h1 className="mb-4 text-center">Misión</h1>
                            <p className="mb-4">En Cortes Plus, nos dedicamos a proporcionar a nuestros clientes la más alta calidad de carne de pollo, res y cerdo. Nuestra misión es asegurar la frescura, seguridad alimentaria y excelencia en el servicio. Nos comprometemos a ser líderes en la distribución de productos cárnicos, ofreciendo una variedad incomparable y adaptándonos a las necesidades individuales de cada cliente.</p>
                        </Col>
                        <Col lg="6" className="pt-lg-0 pt-5">
                            <img src={imgVentisiete} alt="hero-img " />
                        </Col>
                    </Row>
                    <Row className="about-box d-flex align-items-center">
                        <Col lg="6" className="pt-lg-0 pt-5">
                            <img src={imgVentiocho} alt="hero-img " />
                        </Col>
                        <Col lg="6">
                            <h1 className="mb-4 text-center">Visión</h1>
                            <p className="mb-4">Aspiramos a ser reconocidos como la distribuidora de carne de preferencia, destacando por nuestra integridad, innovación y compromiso con la calidad en cada corte de pollo, res y cerdo que ofrecemos. Buscamos liderar la industria, contribuyendo al crecimiento sostenible de nuestros clientes y promoviendo prácticas comerciales responsables en la distribución de carne.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
}
;

export default AboutPage;