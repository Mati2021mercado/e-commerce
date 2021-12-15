import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Pruebas from './components/Pruebas'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';



function App() {
  return (
    <>
      <header>
          
          <NavBar/>
          
      </header>

      <main>
          <h1 style={{textAlign:'center'}}>Tienda Web</h1>
          <section>
          <ItemListContainer greeting="este es un mensaje desde la prop greeting"/>
            <Pruebas/>
          </section>


          <ItemCount stock={5} initial={1}/>

          

      </main>
      
    </>
    
  );
}

export default App;


