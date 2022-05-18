import './App.scss';
import  './components/styles/NavBar.scss'
import NavBar from './components/NavBar';
import HeaderItem from './components/HeaderItem';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className='App'>
      <header className="header">
        <NavBar />
        <HeaderItem greeting="Tómate un respiro, destapa la felicidad" 
        slogan="Lo que usted realmente necesitas es una botella de cerveza fría, con la etiqueta un poco mojada y esas gotas tan hermosas sobre la superficie del vaso."/>
      </header>
      <main className='main'>
        <ItemListContainer />
        <ItemDetailContainer />
      </main>
    </div>
      
  );
}

export default App;
