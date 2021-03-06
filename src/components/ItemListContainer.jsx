import { useState, useEffect } from "react";
import {getFirestore , collection, query, where, getDocs} from 'firebase/firestore'
import ItemList from './ItemList';
import { useParams } from "react-router-dom";

import './styles/ItemListContainer.scss'
import Loader from "./Loader";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();
  
  useEffect(() => {
    setTimeout(() =>{
      const db = getFirestore()    
      const dbCollection = collection(db, 'Products')
      const queryCollectionFilter = id ? query(dbCollection, where('category', '==', id)) : dbCollection

      getDocs(queryCollectionFilter)
      .then(res => setProducts( res.docs.map(product => ( { id: product.id, ...product.data() } ) ) ) )
      .catch((err)=> console.log(err))
      .finally( () => setLoader(false))
    }, 500) 
  },[id]);
    
    

  return (
    <div>
      { loader ? 
          <Loader />
          :
          <ItemList products={products}/>
      }
    </div>
  )
}

export default ItemListContainer