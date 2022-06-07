
import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";

import './styles/CartItem.scss';

function Cart() {
  const { cartList } = useCartContext();
  
  return (
    <div>
      <CartItem products={cartList}/>
    </div>
  )
}

export default Cart