import { useState } from "react"
import Items from "./Item"


export default function  ItemList() {
    const [state, setState] = useState([])
    
    const arrAux = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            setState(Items)
            resolve(true)
        },2000)
    })

    arrAux.then()

    return (
        <div>
            {state.map((valorActual)=>{
                
                return valorActual.id 
                ? 
                
                <div style={productStyle} key={ valorActual.id + "b"}>

                        <div>{valorActual.name}</div>
                            
                        <img height={150} src={valorActual.img}/>
                        
                        <p>Precio: (Usd)<b> {valorActual.price}</b></p>

                </div>
                
                
                : <div></div>
            })}
        </div>
    )
}

const productStyle = {
    margin : "5px",
    display : "inline-block"
}
