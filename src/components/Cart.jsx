import { useEffect } from "react";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import Loader from './Loader';

import './styles/CartItem.scss';

function Cart() {
  const { cartList } = useCartContext();
  const [loader, setLoader] = useState(true);

  useEffect( ()=> {
    setTimeout(()=>{
      setLoader(false);
    }, 1000)
  }, []);
  
  return (
    <div>
      { loader ?
        <Loader />
        :
        <CartItem products={cartList}/>
      }
    </div>
  )
}

export default Cart