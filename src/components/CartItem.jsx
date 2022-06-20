import { faTrash, faBackspace } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import Form from "./Form";

const CartList = ({products}) => {
  const {clearCart, removeItem} = useCartContext()

  return (
    <>
    { products.length !== 0 ? 
        <>
          <h1 className="cart--title">Carrito</h1>
          <table className="cart--container">
            <tr>
              <th colSpan={2}>Nombre</th>
              <th>Cant.</th>
              <th>Precio</th>
            </tr>
            { products.map( item =>{
              return (
              <tr className="cart--detail" key={item.id}>
                <td className="cart--img"><img src={item.src} alt="" /></td>
                <td className="cart--name">{item.name}</td>
                <td className="cart--qty">{item.qty}</td>
                <td className="cart--price">${item.price}</td>
                <td className="cart--remove" onClick={ () => removeItem(item.id) }><FontAwesomeIcon icon={faBackspace} /></td>
              </tr>
              )
            })}
          </table>
          <button className="trash--btn" onClick={clearCart}><FontAwesomeIcon icon={faTrash}/></button>
          <Form />
        </>
      :
        <>
          <h1 className="cart--title negative">No hay productos en el carrito</h1>
          <Link to="/">
            <button className="btn--home">Volver al Inicio</button>
          </Link>
        </>
      }
    
    </>
  )
}

export default CartList