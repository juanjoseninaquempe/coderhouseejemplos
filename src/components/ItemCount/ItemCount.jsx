import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({count, onAdd,sumar,restar}) => {
    // const [count, setCount] = useState(initial)
   

    return (
        <div className="d-flex flex-column align-items-center justify-contenst-between">
            <div>
                <Button variant="dark" onClick={restar}>-</Button>
                <span className="btn">{count}</span>
                <Button variant="dark" onClick={sumar}>+</Button>
            </div>
            <Button className="mt-2" disabled={count === 0}  onClick={() => onAdd(count)}>Comprar</Button>
        </div>
    )
}

export default ItemCount