import { useState } from "react"
import './styles/ItemCount.scss';



const ItemCount = ({stock, initial, onAdd}) => {

  const [count, setCount] = useState(initial);

  function addProduct() {
     if(count < stock){
       setCount(count + 1)
     }

  }
  function subtractProduct() {
    if(count > initial){
      setCount(count - 1)
    }
  }
    
  return (
    <div className="card--counter">
      <div className="input--wrapper">
        <span className="counter">
          <button onClick={subtractProduct}>-</button>
          {count}
          <button onClick={addProduct}>+</button>
        </span>
      </div>
      <button className="cart--btn" onClick={onAdd}>Agregar al Carrito</button>
    </div>
    
  )
}

export default ItemCount