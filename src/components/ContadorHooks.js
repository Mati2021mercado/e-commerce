import React, { useState } from "react";

export default function ContadorHooks(){
    const [contador, setContador] = useState(1)


    const sumar = ()=> {
        let stock = 5
        setContador(
            (contador >= stock)
            ? 
            
            alert("Este es todo el stock")
             
            : contador + 1
        )
    }
    const restar = ()=> setContador( contador - 1 )

    return (
        <>
            <h3>HOOKS CONTADOR</h3>
            <button onClick={sumar}>SUMAR</button>
            <button onClick={restar}>RESTAR</button>
            <h4>{contador}</h4>
        </>
    )
}