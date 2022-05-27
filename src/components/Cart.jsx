import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCartContext } from "../context/CartContext";

import './styles/CartItem.scss';

function Cart() {

  const { cartList, removeItem, clearCart} = useCartContext();

  return (
    <>
      <h1 className="cart--title">Carrito</h1>
      <table className="cart--container">
        <tr>
          <th colSpan={2}>Nombre</th>
          <th>Cant.</th>
          <th>Precio</th>
        </tr>
        { cartList.map( item =>{
          return (
            <tr className="cart--detail" key={item.id}>
              <td className="cart--img"><img src={item.src} alt="" /></td>
              <td className="cart--name">{item.name}</td>
              <td className="cart--qty">{item.qty}</td>
              <td className="cart--price">${item.price}</td>
              <td className="cart--remove" onClick={ () => removeItem(item.id) }>-</td>
            </tr>
          )
        })}
      </table>
      <button className="trash--btn" onClick={clearCart}><FontAwesomeIcon icon={faTrash}/></button>
    </>

  )
}

export default Cart