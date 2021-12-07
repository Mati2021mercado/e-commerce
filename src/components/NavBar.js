import React from 'react';
import CartWidget from './CartWidget';



const navListStyle = {
    display : "flex",
    backgroundColor : "#222"
}

const navListItemStyle = {
    listStyle:"none",
    padding : "8px",
    margin : "0px 5px"
}

const navListItems = ["Inicio", "Home", "Nosotros", "Contacto", "Registrarse"]



function NavBar() {
    return (
        <>
            <CartWidget/>
            
            <nav>
                <ul style={navListStyle}>
                    { 
                    navListItems.map( (index) => (
                        <li className="list__item" style={navListItemStyle}>
                            <a href="#" style={{color: "white",textDecoration: 'none'}}>{index}
                            </a>
                        </li>
                    ))
                    
                    }
                </ul>
        </nav>
        </>
    )
}

export default NavBar;