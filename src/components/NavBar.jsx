import Button from "./Button"
import CartWidget from "./CartWidget"
import "./NavBar.css"

export function NavBar () {
    return (
        <nav className="navbar">
        <h3>Tu logo</h3>
        <Button texto="Remeras"/>
        <Button texto="Busos"/>
        <Button texto="Pantalones"/>
        <CartWidget items={9} />
        </nav>
    )
}


