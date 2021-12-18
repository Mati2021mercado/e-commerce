import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Pruebas from './components/Pruebas'
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList'
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <>
      <header>
          
          <NavBar/>
          
      </header>

      <main>
          <h1 style={{textAlign:'center'}}>Tienda Web</h1>
          <section>

          <ItemListContainer/>

            <Pruebas/>
          </section>


          <ItemCount stock={5} initial={1}/>

          

      </main>
      
    </>
    
  );
}

export default App;


