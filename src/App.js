import './App.scss';
import  './components/styles/NavBar.scss'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <header className="header">
      <NavBar />
      <ItemListContainer greeting="Tómate un respiro, destapa la felicidad" 
      slogan="Lo que usted realmente necesitas es una botella de cerveza fría, con la etiqueta un poco mojada y esas gotas tan hermosas sobre la superficie del vaso."/>
    </header>
  );
}

export default App;
