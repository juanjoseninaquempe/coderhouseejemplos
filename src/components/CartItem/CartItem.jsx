import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
}


const CartItem = ({ item , handleDelete }) => {
    return (
        <Card body>
            <Container>
                <Row>
                    <Col>
                    {item.producto.name}
                    </Col>
                    <Col>
                    {item.producto.quant}
                    </Col>
                    <Col>
                    {item.producto.price}
                    </Col>
                    <Col>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}
export default CartItem