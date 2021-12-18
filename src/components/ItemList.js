
// ITEMLISTCOINTAINER ME PASA COMO PROP EL STATE Y LO MAPEO, LUEGO LO RENDERIZO EN APP

export default function  ItemList({state}) {
    // const [state, setState] = useState([])

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
