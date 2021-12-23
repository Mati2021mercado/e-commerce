
const Item = ({ producto }) => {

    return (

                producto.id 
                ? 
                
                <div style={productStyle} key={ producto.id + ": productoList"}>

                        <div>{ producto.name}</div>
                            
                        <img height={150} src={producto.img}/>
                        
                        <p>Precio: (Usd)<b> {producto.price}</b></p>

                </div>
                
                : <div> Algo salio mal </div>

    )
}
export default Item

const productStyle = {
    margin : "5px",
    display : "inline-block"
}

