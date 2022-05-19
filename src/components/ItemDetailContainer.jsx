import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";
import {getProducts} from '../assets/datos';

import './styles/ItemDetailContainer.scss';

const ItemDetailContainer = () => {
  const [item, setItems] = useState([]);
  const { detId } = useParams();

  useEffect(() => {
    getProducts(detId)
    .then( res => setItems(res))
    .catch(err => console.log(err))
  },[detId]); 

  console.log(item);  
  return (
    <div>
      <h2 className="detail--container">Item Detail Container</h2>
      <ItemDetail name={item.name} src={item.src} price={item.price} description={item.description}/>
    </div>
  )
}

export default ItemDetailContainer