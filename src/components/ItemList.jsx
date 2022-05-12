import { productList } from "../assets/datos";
import { useState, useEffect } from "react";
import Item from "./Item";
import './styles/ItemList.scss';

const ItemList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 2000);
  });

  useEffect(() => {
    getProducts
    .then( res => setProducts(res))
    .catch(err => console.log(err))
  });

  return (
    <div className="container--items">
      <h2 className="items--title">Lista de productos</h2>

      {products.map( (product) => {
        return (
          <div key={product.id}>
            <Item name={product.name} price={product.price} src={product.src}/>
          </div>
        );
      })
      }
    </div>
  )
}

export default ItemList