const Item = ({ valorActual }) => {

    return (

                valorActual.id 
                ? 
                
                <div style={productStyle} key={ valorActual.id + "b"}>

                        <div>{valorActual.name}</div>
                            
                        <img height={150} src={valorActual.img}/>
                        
                        <p>Precio: (Usd)<b> {valorActual.price}</b></p>

                </div>
                
                
                : <div></div>

    )
}
export default Item
const productStyle = {
    margin : "5px",
    display : "inline-block"
}

