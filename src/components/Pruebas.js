import React from 'react';
import Componente from './Componente';

export default function Pruebas(props){ 
    return <h3>{props.componenteReact}</h3> 
}
    

Pruebas.defaultProps = {
    componenteReact : <Componente mensaje ="Hola Mundo"/>
};

