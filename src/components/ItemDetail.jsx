import { useState } from 'react';
import Confirmacion from './Confirmacion';
import ItemCount from './ItemCount';
import './styles/Item.scss';

const ItemDetail = ({name, price, description, src}) => {
  
  const [type, setType] = useState('button');
  const onAdd = () =>{
    setType('buttons')
  }

  return (
    <section className='product--card'>
      <span className='card--price'>${price}</span>
      <img className='card--img' src={src} alt=""/>

      <h2 className='card--name'>{name}</h2>
      <p className='card--description'>{description}</p>
      {
        type === 'button' ?
          <ItemCount stock={5} initial={1} onAdd={onAdd}/>
          :
          <Confirmacion />      
      }
    </section>
  )
}

export default ItemDetail