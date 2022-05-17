import { useEffect, useState } from "react";
import {getProducts} from '../assets/datos';
import ItemDetail from "./ItemDetail";

import './styles/ItemDetailContainer.scss';

const ItemDetailContainer = () => {
  const [item, setItems] = useState([]);

  useEffect(() => {
    getProducts('1')
    .then( res => setItems(res))
    .catch(err => console.log(err))
  });
  
  return (
    <div>
      <h2 className="detail--container">Item Detail Container</h2>
      <ItemDetail name={item.name} src={item.src} price={item.price} description={item.description}/>
    </div>
  )
}

export default ItemDetailContainer