import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Pruebas from './components/Pruebas'
import Parrafo from './components/Parrafo'
import Estado from './components/Estado';
import ItemListContainer from './components/ItemListContainer';
import RenderCondicional from './components/RenderCondicional';
import ContadorHooks from './components/ContadorHooks';


function App() {
  return (
    <>
      <header>
          
          <NavBar/>
          <ItemListContainer greeting="este es un mensaje desde la prop greeting"/>
      </header>

      <main>
          <h1 style={{textAlign:'center'}}>Tienda Web</h1>
          <section>

            <Pruebas/>

            <ContadorHooks/>
          
          </section>

          <Estado/>
          <RenderCondicional/>
      </main>
      
    </>
    
  );
}

export default App;


