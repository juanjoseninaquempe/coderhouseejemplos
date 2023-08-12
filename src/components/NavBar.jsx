import Button from "./Button"
import CartWidget from "./CartWidget"
import "./NavBar.css"

export function NavBar () {
    return (
        <nav className="navbar">
        <h3 >TIENDA OFICIAL DE JOGGERS</h3>
        <img src="../assets/logo.jpg" alt="" />
        <Button texto="JOGGERS"/>
        <Button texto="CAMISAS"/>
        <Button texto="GORRAS"/>
        <CartWidget items={9} />
        </nav>
    )
}


