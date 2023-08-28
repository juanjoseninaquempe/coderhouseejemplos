import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({stock, onAdd,initial}) => {
    const [count, setCount] = useState(initial)
    const sumar = () => {
        if( count < stock){
            setCount(count +1)
        }
    }
    const restar = () => {
        if(count > 0){
            setCount(count -1)
        }
    }
    return (
        <div className="d-flex flex-column align-items-center justify-content-between">
            <div>
                <Button variant="dark" onClick={restar}>-</Button>
                <span className="btn">{count}</span>
                <Button variant="dark" onClick={sumar}>+</Button>
            </div>
            <Button className="mt-2" disabled={count === 0} onClick={() => onAdd(count)}>Comprar</Button>
        </div>
    )
}

export default ItemCount