import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.scss';
import  './components/styles/NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


import NavBar from './components/NavBar';
import HeaderItem from './components/HeaderItem';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './context/CartContext';


function App() {
  return (
    <CartContextProvider>

      <BrowserRouter>
        <div className='App'>
          <header className="header">
            <NavBar />
            <HeaderItem greeting="Tómate un respiro, destapa la felicidad" 
            slogan="Lo que usted realmente necesitas es una botella de cerveza fría, con la etiqueta un poco mojada y esas gotas tan hermosas sobre la superficie del vaso."/>
          </header>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/detail/:detId' element={<ItemDetailContainer />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/cart' element={ <Cart />} />
            
            <Route path='/*' element={ <Navigate to='/' replace />} />
          </Routes>
        </div>
      </BrowserRouter>
      
    </CartContextProvider>
  );
}

export default App;
