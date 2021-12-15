import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = (props)=>(
    <>
        <p> esto es el ItemListContainer y {props.greeting + " y " + props.mensaje}</p>
        
        <ItemList/>
    </>
    
)


ItemListContainer.defaultProps = {
    mensaje : "esta es la prop mensaje"
};



export default ItemListContainer