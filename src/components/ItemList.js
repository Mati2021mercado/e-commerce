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
                //aqui le hago una pregunta, es obvio que puse la misma imagen para todas las fotos, y es por que cuando intentaba hacerlo con las propias no me dejaba, src={valorActual.img} eso es lo que habia intentado antes.
                
                <div style={productStyle} key={ valorActual.id + "b"}>

                        <div>{valorActual.name}</div>
                            
                        <img height={150} src="https://st.depositphotos.com/1001555/2719/i/600/depositphotos_27190451-stock-photo-blank-computer-monitor.jpg"/>
                        
                        <p>{valorActual.price}</p>

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


