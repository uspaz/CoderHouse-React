import { useState, useEffect } from "react";
import {getProducts} from '../assets/datos';
import ItemList from './ItemList';

import './styles/ItemListContainer.scss'




const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProducts()
    .then( res => setProducts(res))
    .catch(err => console.log(err))
  });

  return (
    <div>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer