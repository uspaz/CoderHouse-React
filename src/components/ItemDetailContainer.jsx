import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc } from 'firebase/firestore'
import Loader from './Loader';
import ItemDetail from "./ItemDetail";

import './styles/ItemDetailContainer.scss';

const ItemDetailContainer = () => {
  const [item, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const { detId } = useParams();

  useEffect(() => {
      const db = getFirestore()
      const dbQuery = doc(db, 'Products', detId)
      getDoc(dbQuery)
      .then(res => setItems( { id: res.id, ...res.data() } ) )
      .catch(err => console.log(err))
      .finally( () => setLoader(false))
  },[detId]); 

  return (
    <div className="detail--container">
      {loader ?
        <Loader />
        :
        <>
        <h2 className="detail--title">Item Detail Container</h2>
        <ItemDetail item={item}/>
        </>
      }
    </div>
  )
}

export default ItemDetailContainer