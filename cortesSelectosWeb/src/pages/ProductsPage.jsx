import { Container, Row, Col } from "react-bootstrap"
import { allProducts } from "../data/index"

const ProductsPage = () => {
    return (
        <div className="productospage">
            <div className="productos min-vh-100">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-center fw-bold">Productos</h1>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </Col>
                    </Row>
                    <Row>
                        {allProducts.map((products) => {
                            return <Col key={products.id}>
                                <img src={products.image} alt="" className="w-100 mb-5 rounded-top" />
                                <h5 className="mb-5 px-3">{products.title}</h5>
                                <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                                    {/*<p className="m-0 text-primary fw-bold">{products.price}</p>
                                    <button className="btn btn-danger rounded-1">{products.buy}</button>*/}
                                </div>
                            </Col>
                        })}
                    </Row>
                    <Row className="">
                        <Col className="text-center">
                            <button className="btn btn-success rounded-5 btn-lg" onClick={() => {
                                const mensajeBienvenida = encodeURIComponent("¡Bienvenido a Cortes Selectos! Estamos encantados de que estés aquí. Si tienes alguna pregunta, necesitas asistencia o estás interesado en nuestros productos, nuestro equipo está listo para ayudarte. ¡No dudes en escribirnos y te responderemos lo más pronto posible!");

                                window.open(`https://wa.me/+50660113194?text=${mensajeBienvenida}`, '_blank');
                            }}>
                                Consulte por nuestros productos<i className="fa-solid fa-chevron-right ms-2"></i>
                            </button>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
    ;

export default ProductsPage;