import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const FooterComponent = () => {
    return (
        <div className="footer py-5">
            <Container>
                <Row className="d-flex justify-content-between">
                    <Col lg="5">
                        <h3 className="fw-bold">Cortes Selectos</h3>
                        <p className="desc">Nos especializamos en ofrecer una amplia selección de carne de res, pollo y cerdo, asegurando frescura y sabor excepcionales en cada corte. </p>
                        <div className="no mb-1 mt-4">
                            <Link className="text-decoration-none">
                                <i className="fas fa-phone"></i>
                                <p className="m-0">2440-1675</p>
                            </Link>
                            <Link className="text-decoration-none">
                                <i className="fas fa-phone"></i>
                                <p className="m-0">8877-1011</p>
                            </Link>
                        </div>
                        <div className="mail">
                            <Link className="text-decoration-none">
                                <i className="fa-regular fa-envelope"></i>
                                <p className="m-0">ventas@cortespluspinares.com</p>
                            </Link>
                            <Link className="text-decoration-none">
                                <i className="fa-regular fa-envelope"></i>
                                <p className="m-0">facturación@cortespluspinares.com</p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
                        <h5 className="fw-bold">Menu</h5>
                        <Link to="">Home</Link>
                        <Link to="/products">Productos</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/about">Nosotros</Link>
                    </Col>
                    <Col lg="4" className="mt-lg-0 mt-5">
                        <h5 className="fw-bold mb3">Descarga nuestro catalogo</h5>
                        <div className="subscribes">
                            <a href="">
                                <button className="btn btn-danger rounded-1 me-2 mb-xs-0 mb-2">Descargar</button>
                            </a>
                        </div>
                        <div className="social mt-3">
                            {/** 
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>*/}
                            <a href="https://api.whatsapp.com/send?phone=50688771011" target="_blank">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>


                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by Cortes Plus. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
    ;

export default FooterComponent;
