import { useState } from "react"
import './styles/ItemCount.scss';



const ItemCount = ({stock, initial, onAdd}) => {

  const [count, setCount] = useState(initial);

  function addProduct(num) {
      setCount(count + num);
  }
    
  return (
    <div className="card--counter">
      <div className="input--wrapper">
        <span className="counter">
          <button onClick={()=> count > initial && addProduct(-1)}>-</button>
          {count}
          <button onClick={()=> count < stock && addProduct(+1)}>+</button>
        </span>
      </div>
      <button className="cart--btn" onClick={onAdd}>Agregar al Carrito</button>
    </div>
    
  )
}

export default ItemCount