import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";


export const Paguina2=()=>{

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [resultado, setResultado] = useState(0)

    const sumar=()=>{
        const r=n1+n2
        setResultado(r)
    }
    useEffect(()=>{
        sumar()


    },[n1,n2])

    return(
        <>
        <h1>Los numeros a usar son {n1}+{n2}={resultado}</h1>

        <Form>
            <Form.Group>
                <Form.Label>Numero uno:</Form.Label>
                <Form.Control type="number" onChange={(e)=>{setN1(parseInt(e.currentTarget.value))}}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Numero dos:</Form.Label>
                <Form.Control type="number" onChange={(e)=>{setN2(parseInt(e.currentTarget.value))}}></Form.Control>
            </Form.Group>

            <Button variant="outline-danger" size="lg" onClick={sumar}>Registrar</Button>

            <Form.Group>
                <Form.Label>Resultado</Form.Label>
                <Form.Control type="number"disabled onChange={(e)=>{setResultado(parseInt(e.currentTarget.value))}}></Form.Control>
            </Form.Group>
        </Form>





        </>
    )



}




export default Paguina2