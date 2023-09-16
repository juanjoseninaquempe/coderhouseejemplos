import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";



 const CartItem = ({ producto , deleteItem,totalPrecio}) => {

    return (
        <Card body>
            <Container>
                <Row>
                    <Col>
                    {producto.item.name}
                    </Col>
                    <Col>
                    Cantidad : {producto.contador}
                    </Col>
                    <Col>
                    $ {producto.item.price}
                    </Col>
                    <Col>
                    <Button variant="danger" onClick={() => deleteItem(producto.item.id) }>Delete</Button>   
                     </Col>
                </Row>
            </Container>
        </Card>
    )
}
export default CartItem