import React from 'react';
import { useState } from "react"
import Items from "./Item"
import ItemList from './ItemList';

//LLAMO A LOS DATOS Y LOS GUARDO EN EL STATE Y SE LO PASO COMO PROP A ITEMLIST

export default function  ItemListContainer(props) {
    const [state, setState] = useState([])
    
    const arrAux = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            setState(Items)
            resolve(true)
        },2000)
    })

    arrAux.then()

    return(
        <>
            <ItemList state={state}/>
        </>
    )

}