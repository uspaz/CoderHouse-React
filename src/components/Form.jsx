import { useCartContext } from "../context/CartContext"
import './styles/Form.scss'

const Form = () => {
  const {createOrder, fillOutForm} = useCartContext();

  return (
    <>
    <form className="form--container">
      <label htmlFor="name">Nombre:</label>
      <input 
        type="text" 
        name="name"
        onChange={fillOutForm}
        placeholder="Escriba su nombre"
        required="true"
      />

      <label htmlFor="email">E-Mail:</label>
      <input 
        type="email"
        name="email"
        onChange={fillOutForm}
        placeholder="Escriba su correo"
        required="true"
      /> 

      <label htmlFor="phone">Teléfono:</label>
      <input 
        type="tel"
        name="phone"
        onChange={fillOutForm}
        placeholder="Escriba su telefono"
        required="true"
      />

      <label htmlFor="address">Dirección:</label>
      <input 
        type="text"
        name="address"
        onChange={fillOutForm}
        placeholder="Escriba su dirección"
        required="true"
      /> 

      <button type="submit" onClick={createOrder}>Confirmar Compra</button>
    </form>
    </>
  )
}

export default Form