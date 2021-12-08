import React from 'react';

const ItemListContainer = (props)=>(
    <p> esto es el ItemListContainer y {props.greeting + " y " + props.mensaje}</p>
)


ItemListContainer.defaultProps = {
    mensaje : "esta es la prop mensaje"
};



export default ItemListContainer