import { register } from "module";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Paguina1=()=>{
    const [nombre, setNombre] = useState("John")
    const [apellido,setApellido] =useState("Doe")
    const [eNombre, setENombre] = useState("")
    
    const validarNombre=(valor:string)=>{
        if(valor.length>3){
            setENombre("");
        }else{
            setENombre("debes ingresar un nombre al menos 3 caracteres")
        }
        setNombre(valor);

    }
    const registrar=()=>{
        console.log(nombre+" "+apellido)
        alert("Registraste: "+nombre+" "+apellido)
    }
    return(
    <>

    <h1>Bienvenido {nombre} {apellido}</h1>





        <Form>
            <Form.Group>
                <Form.Label>Nombre:</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre" onChange={(e)=>{validarNombre(e.currentTarget.value)}}></Form.Control>
                <Form.Text>
                    {eNombre}
                </Form.Text>
            </Form.Group>
        </Form>
        <Form>
            <Form.Group>
                <Form.Label>Apellido:</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu apellido" onChange={(e)=>{setApellido(e.currentTarget.value)}}></Form.Control>
            </Form.Group>
            <Button variant="outline-danger" size="lg" onClick={registrar}>Registrar</Button>

        </Form>







        <form>
            <br></br>
            <label>Nombre:</label>
            <input type="text" placeholder="ingrese nombre" />
            <label>Apellido:</label>
            <input type="text" placeholder="Ingrese Apellido"/>
            <button type="button">Registrar</button>
        
        </form>
    </>
    )
}
export default Paguina1

