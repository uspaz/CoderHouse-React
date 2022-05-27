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

  return (
    <div className="detail--container">
      <h2 className="detail--title">Item Detail Container</h2>
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer