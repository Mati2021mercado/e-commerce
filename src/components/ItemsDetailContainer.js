import React from 'react';
import {useEffect, useState } from "react"
import ItemDetails from './ItemDetails';
import ListProducts from './ListProducts';


const GetItem = ()=>
    new Promise((resolve) => setTimeout(() => resolve(ListProducts[1]), 2000))
    
const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])

    useEffect( ()=> GetItem().then(producto => setDetail(producto)), [])

    return  <ItemDetails detail={detail} />
    
}
export default ItemDetailContainer

