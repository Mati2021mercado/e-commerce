import React from 'react';
import { useState } from "react"
import ItemList from './ItemList';

import ImgProduct1 from './Img/producto1.jpg';
import ImgProduct2 from './Img/producto2.jpg';
import ImgProduct3 from './Img/producto3.jpg';
import ImgProduct4 from './Img/producto4.jpg';
import ImgProduct5 from './Img/producto5.jpg';
import ImgProduct6 from './Img/producto6.jpg';
import ImgProduct7 from './Img/producto7.jpg';
import ImgProduct8 from './Img/producto8.jpg';
import ImgProduct9 from './Img/producto9.jpg';

const array = [
    {id : 1, name : "Lenovo", img : ImgProduct1, price : 111   },
    {id : 2, name : "Mac", img : ImgProduct2, price : 3012   },
    {id : 3, name : "Notebook 3 ", img : ImgProduct3, price : 532   },
    {id : 4, name : "Lenovo ThinkPad", img : ImgProduct4, price : 954   },
    {id : 5, name : "Arius", img : ImgProduct5, price : 441   },
    {id : 6, name : "Omega 3", img : ImgProduct6, price : 652   },
    {id : 7, name : "Potasio", img : ImgProduct7, price : 1928   },
    {id : 8, name : "Render", img : ImgProduct8, price : 901   },
    {id : 9, name : "object Object", img : ImgProduct9, price : 301   }
]

//LLAMO A LOS DATOS Y LOS GUARDO EN EL STATE Y SE LO PASO COMO PROP A ITEMLIST

export default function  ItemListContainer(props) {
    const [state, setState] = useState([])
    
    const arrAux = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            setState(array)
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