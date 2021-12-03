import React from 'react';

const navListStyle = {
    display : "flex",
    backgroundColor : "#222"
}

const navListItemStyle = {
    textDecoration: 'none',
    color: "white",
    listStyle:"none",
    padding : "8px",
    margin : "0px 5px"
}

const navListItems = ["Inicio", "Home", "Nosotros", "Contacto", "Registrarse"]

function NavBar() {
    return <nav>
    
    <ul style={navListStyle}>
        { 
        navListItems.map( (index) => (
            <li className="list__item" style={navListItemStyle}>{index}</li>
        ))
        
        }
    </ul>

    </nav>
}

export default NavBar;