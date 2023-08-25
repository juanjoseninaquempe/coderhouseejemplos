import Button from "../Button"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import imagenprincipal from "../assets/logo.jpg"

export function NavBar () {
    return (
        <nav className="navbar">
        <img src={imagenprincipal} />
        <Button texto="JOGGERS"/>
        <Button texto="CAMISAS"/>
        <Button texto="GORRAS"/>
        <CartWidget items={9} />
        </nav>
    )
}


