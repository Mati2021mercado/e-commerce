import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Pruebas from './components/Pruebas'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemsDetailContainer';


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

          <br/>

          <ItemDetailContainer />

            <Pruebas/>
          </section>


      </main> 
      
    </>
    
  );
}

export default App;


