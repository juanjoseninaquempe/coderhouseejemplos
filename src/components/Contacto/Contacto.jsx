import { Button } from "react-bootstrap";
import {useForm} from "react-hook-form";

const Contacto = () => {
    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

  return (

    <div className="container">
        <h1 className="main-title">Contacto</h1>
        <form className="formulario" onSubmit={handleSubmit(enviar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <Button className="enviar" type="submit">Enviar</Button>

        </form>
    </div>
    )
}

export default Contacto