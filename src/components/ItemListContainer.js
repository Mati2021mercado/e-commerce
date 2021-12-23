import React from 'react';
import {useEffect, useState } from "react"
import ItemList from './ItemList';
import ListProducts from './ListProducts';

export default function  ItemListContainer(props) {
    const [list, setList] = useState([])

    useEffect(() => {
        const arrAux = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                setList(ListProducts)
                resolve(true)
            },2000)
        })
    
        arrAux.then()

    }, [])

    return <ItemList list={list}/>
        
}