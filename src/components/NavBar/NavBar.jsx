import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import Button from "../Button"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import {NavLink} from "react-router-dom"

export function NavBar () {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">

            <Container>
                <Navbar.Brand as={NavLink} to="/" href="#home">Coder Shop!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <img src={"https://i.postimg.cc/zGxJ2NBY/whatsapp-wavye26aea27-b175-49f0-8d1b-5171556ea4f3.jpg'"} />

                        <Nav.Link  as={NavLink} to="/" >Home</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item  as={NavLink} to="/category/ofertas">Ofertas</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/category/nuevos">
                                Nuevos
                            </NavDropdown.Item>
                            <NavDropdown.Item  as={NavLink} to="/category/vendidos">Mas vendidos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item  as={NavLink} to="/">
                                Todos los productos
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
//         <nav className="navbar">
//         <img src={"https://i.postimg.cc/zGxJ2NBY/whatsapp-wavye26aea27-b175-49f0-8d1b-5171556ea4f3.jpg'"} />
//         <Button texto="JOGGERS" alt="logo"/>
//         <Button texto="CAMISAS"/>
//         <Button texto="GORRAS"/>
//         <CartWidget items={9} />
//         </nav>
//     )
// }

export default NavBar