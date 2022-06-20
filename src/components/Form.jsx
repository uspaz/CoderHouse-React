import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useCartContext } from "../context/CartContext"
import './styles/Form.scss'

const Form = () => {
  const {createOrder, fillOutForm, totalPrice} = useCartContext();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="modal--item" onClick={handleShow}>
        Terminar Compra
      </Button>

      <Modal className="modal" size="xl" show={show} onHide={handleClose}>
        <Modal.Header className="modal--header" closeButton>
        </Modal.Header>
        <Modal.Body className="modal--body">
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
            <span className="hr"></span>
            <span className="total--price">El precio total es {totalPrice()}</span>
            <button type="submit" onClick={createOrder}>Confirmar Compra</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
    
}

export default Form