import ItemCount from './ItemCount';

const ItemDetails = ({ detail }) => {

    return (

        <div style={{margin: "0px 500px"}}>

            <div style={productStyle} key={ detail.id +": productoDetail"}>

                <div>{ detail.name }</div>
                    
                <img height={150} alt={ detail.name } src= { detail.img }/>
                
                <p>Precio: (Usd)<b>  {detail.price}</b></p>

                <ItemCount stock= {detail.stock} initial={1}/>

            </div>  
                       
        </div>            
    )

}
export default ItemDetails

const productStyle = {
    margin : "5px",
    display : "inline-block"
}

