import {useState} from "react";

const ModalAdd = ()=> <h3>Stock maximo alcanzado</h3>
const ModalSub = ()=> <h3>No valido</h3>

// destructuracion de props

export default function ItemCount({stock, initial}) {
    const [valorInicial, setValorInicial] = useState(initial);
    // const [showModalAdd, setShowModalAdd] = useState(false);
    // const [showModalSub, setShowModalSub] = useState(false);

    const handlerAdd = ()=> {
        if(valorInicial < stock){setValorInicial((initial) => initial + 1)}
        else alert("Stock maximo alcanzado")
        // setShowModalAdd((showModalAdd) => !showModalAdd)  
    }

    const handlerSub = () => {
        if(valorInicial > 1){setValorInicial((prev) => prev - 1)}
        else alert("No valido")
        // setShowModalSub((showModalSub) => !showModalSub) 
    }

    return(
        <div style={stockStyle}>
            <button onClick={handlerAdd}>Sumar</button>

            <p>{valorInicial}</p>

            <button onClick={handlerSub}>Restar</button>
            
            
        </div>
    )
}

// esto iria abajo del boton
// {showModalAdd && <ModalAdd/>}
// {showModalSub && <ModalSub/>}

const stockStyle = {
    display : "flex",
    height : "35px",
    justifyContent : "space-around"
    
}
