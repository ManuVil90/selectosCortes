import { Container, Row, Col } from "react-bootstrap";
import HeroImage from '../assets/img/carneUno.png';

import { productsBeef } from "../data/index";
import { productsChicken } from "../data/index";
import { productsPig } from "../data/index";
import {useNavigate} from "react-router-dom";
import FaqComponent from "../components/FaqComponent";

const HomePage = () => {

    let navigate = useNavigate();


    return (
        <div className="homepage">
            <header className="w-100 min-vh-100 d-flex align-items-center">
                <Container>
                    <Row className="header-box d-flex align-items-center">
                        <Col lg="6">
                            <h1 className="mb-4 text-center"><span>Cortes Plus</span><br />Los mejores cortes<br />a su mesa.</h1>
                            <p className="mb-4">Somos, tu destino confiable para carnes frescas y de calidad superior. Nos especializamos en ofrecer una amplia selección de carne de res, pollo y cerdo, asegurando frescura y sabor excepcionales en cada corte. Descubre la diferencia en cada bocado con nuestros productos cuidadosamente seleccionados y servicio de primera clase.</p>

                            <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2" onClick={() =>navigate("/products") } >
                            Productos</button>
                        </Col>
                        <Col lg="6" className="pt-lg-0 pt-5">
                            <img src={HeroImage} alt="hero-img " />
                        </Col>
                    </Row>
                </Container>
            </header>
            <div className="products w-100 min-vh-100">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-center fw-bold">Carne de Res</h1>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Col>
                    </Row>
                    <Row>
                        {productsBeef.map((products) => {
                            return <Col key={products.id}>
                                <img src={products.image} alt="unsplash.com" className="w-100 mb-5 rounded-top"/>
                                <h5 className="mb-5 px-3">{products.title}</h5>
                                <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                                    {/*<p className="m-0 text-primary fw-bold">{products.price}</p>
                                    <button className="btn btn-danger rounded-1">{products.buy}</button>*/}
                                </div>
                            </Col>
                        })}
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="text-center fw-bold">Pollo</h1>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Col>
                    </Row>
                    <Row>
                        {productsChicken.map((productsChi) => {
                            return <Col key={productsChi.id}>
                                <img src={productsChi.image} alt="unsplash.com" className="w-100 mb-5 rounded-top"/>
                                <h5 className="mb-5 px-3">{productsChi.title}</h5>
                                <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                                    {/*<p className="m-0 text-primary fw-bold">{products.price}</p>
                                    <button className="btn btn-danger rounded-1">{products.buy}</button>*/}
                                </div>
                            </Col>
                        })}
                    </Row>
                    <Row>
                        <Col>
                            <h1 className="text-center fw-bold">Cerdo</h1>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Col>
                    </Row>
                    <Row>
                        {productsPig.map((productsPi) => {
                            return <Col key={productsPi.id}>
                                <img src={productsPi.image} alt="unsplash.com" className="w-100 mb-5 rounded-top"/>
                                <h5 className="mb-5 px-3">{productsPi.title}</h5>
                                <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                                    {/*<p className="m-0 text-primary fw-bold">{products.price}</p>
                                    <button className="btn btn-danger rounded-1">{products.buy}</button>*/}
                                </div>
                            </Col>
                        })}
                    </Row>
                    {/*
                    <Row>
                        <Col className="text-center">
                        <button className="btn btn-success rounded-5 btn-lg" onClick={() =>navigate("/products") }>
                            Todos los Productos<i className="fa-solid fa-chevron-right ms-2"></i></button>
                        
                        </Col>
                    </Row>
                    */}
                </Container>
            </div>
            <div>
                <FaqComponent></FaqComponent>
            </div>
        </div>
    );
};

export default HomePage;