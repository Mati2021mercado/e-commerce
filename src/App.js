import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Pruebas from './components/Pruebas'
import Parrafo from './components/Parrafo'

import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
      <header>
          
          <NavBar/>
          <ItemListContainer/>
      </header>

      <main>
          <h1 style={{textAlign:'center'}}>Tienda Web</h1>
          <section>

            <Pruebas/>

            <Parrafo numero="one"/>
            <Parrafo numero="two"/>
            <Parrafo numero="three"/>
          
          </section>
      </main>
      
    </>
    
  );
}

export default App;


